import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ArticleCard from './ArticleCard';

const SingleArticlePage = () => {
  const { id } = useParams();
  const article = useSelector((state) =>
    state.articles.articles.find((article) => article.id === id)
  );

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <ArticleCard article={article} />
    </div>
  );
};

export default SingleArticlePage;
