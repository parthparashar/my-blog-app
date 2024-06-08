import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { articleAdded } from '../redux/slices/articlesSlice';
import { useNavigate } from 'react-router-dom';

const CreateArticlePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productName, setProductName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(articleAdded({ id: Date.now().toString(), productName, avatar, name, description, productPrice }));
    navigate('/');
  };

  return (
    <div>
      <h2>Create Article</h2>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateArticlePage;
