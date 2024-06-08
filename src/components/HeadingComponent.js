import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/slices/articlesSlice';
import styled from 'styled-components';

const HeadingComponent = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <Header>
      <h1>Article Manager</h1>
      <SearchInput
        type="text"
        placeholder="Search articles..."
        onChange={handleSearchChange}
      />
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 300px;
`;

export default HeadingComponent;
