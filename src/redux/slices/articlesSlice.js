import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch articles from the API
export const fetchArticles = createAsyncThunk('articles/fetchArticles', async (page) => {
  const response = await axios.get(`https://65d5af42f6967ba8e3bc35a3.mockapi.io/blogs/v1/articles?page=${page}&limit=10`);
  return response.data;
});

// Function to load articles from local storage
const loadArticlesFromLocalStorage = () => {
  const savedArticles = localStorage.getItem('articles');
  return savedArticles ? JSON.parse(savedArticles) : [];
};

// Function to save articles to local storage
const saveArticlesToLocalStorage = (articles) => {
  localStorage.setItem('articles', JSON.stringify(articles));
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: loadArticlesFromLocalStorage(),
    status: 'idle',
    error: null,
    searchQuery: '',
  },
  reducers: {
    articleAdded: (state, action) => {
      state.articles.push(action.payload);
      saveArticlesToLocalStorage(state.articles);
    },
    articleUpdated: (state, action) => {
      const { id, productName, avatar, name, description, productPrice } = action.payload;
      const existingArticle = state.articles.find((article) => article.id === id);
      if (existingArticle) {
        existingArticle.productName = productName;
        existingArticle.avatar = avatar;
        existingArticle.name = name;
        existingArticle.description = description;
        existingArticle.productPrice = productPrice;
        saveArticlesToLocalStorage(state.articles);
      }
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = state.articles.concat(action.payload);
        saveArticlesToLocalStorage(state.articles);
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { articleAdded, articleUpdated, setSearchQuery } = articlesSlice.actions;
export default articlesSlice.reducer;
