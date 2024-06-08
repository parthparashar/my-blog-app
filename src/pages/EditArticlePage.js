import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { articleUpdated } from '../redux/slices/articlesSlice';
import { useParams, useNavigate } from 'react-router-dom';

const EditArticlePage = () => {
  const { id } = useParams();
  const article = useSelector((state) =>
    state.articles.articles.find((article) => article.id === id)
  );

  const [productName, setProductName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');

  useEffect(() => {
    if (article) {
      setProductName(article.productName);
      setAvatar(article.avatar);
      setName(article.name);
      setDescription(article.description);
      setProductPrice(article.productPrice);
    }
  }, [article]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(articleUpdated({ id, productName, avatar, name, description, productPrice }));
    navigate('/');
  };

  return (
    <div>
      <h1>Edit Article</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Avatar:</label>
          <input
            type="text"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Name:</label>
          <textarea
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Product Price:</label>
          <textarea
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Update Article</button>
      </form>
    </div>
  );
};

export default EditArticlePage;
