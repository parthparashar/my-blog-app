import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const ArticleCard = ({ article }) => {
  return (
    <CardContainer>
      <Avatar src={article.avatar} alt="avatar" />
      <div>
        <p>Name: {article.name}</p>
        <p>Description: {article.description}</p>
        <p>Product Name: {article.productName}</p>
        <p>Product Price: {article.productPrice}</p>
        <p>Created At: {article.createdAt}</p>
      </div>
    </CardContainer>
  );
};

export default ArticleCard;
