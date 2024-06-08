import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles, setSearchQuery } from '../redux/slices/articlesSlice';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

const HomePage = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);
  const status = useSelector((state) => state.articles.status);
  const searchQuery = useSelector((state) => state.articles.searchQuery);
  const error = useSelector((state) => state.articles.error);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchArticles());
    }
  }, [dispatch, status]);

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const filteredArticles = articles.filter((article) =>
    article.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const articlesToShow = searchQuery ? filteredArticles : articles.slice(0, page * 8);

  return (
    <div className="container">
      <h1>Articles</h1>
      {status === 'loading' && page === 1 ? <p>Loading...</p> : null}
      {status === 'failed' && <p>{error}</p>}
      {searchQuery ? (
        <div className="article-list">
          {filteredArticles.map((article) => (
            <div key={article.id} className="article">
              <h2>{article.productName}</h2>
              <img className='avatar' src={article.avatar} alt={article.productName} />
              <br />
              <Link to={`/article/${article.id}`}>Read More</Link>
            </div>
          ))}
        </div>
      ) : (
        <InfiniteScroll
          dataLength={articlesToShow.length}
          next={fetchMoreData}
          hasMore={articlesToShow.length < articles.length}
          loader={<h4>Loading...</h4>}
          endMessage={<p>No more articles</p>}
        >
          <div className="article-list">
            {articlesToShow.map((article) => (
              <div key={article.id} className="article">
                <h2>{article.productName}</h2>
                <img className='avatar' src={article.avatar} alt={article.productName} />
                <br />
                <Link to={`/article/${article.id}`}>Read More</Link>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default HomePage;
