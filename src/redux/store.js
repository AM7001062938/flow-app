// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../features/categories/categoriesSlice';
import frequentBuysReducer from '../features/frequentBuys/frequentBuysSlice';
import graphqlReducer from '../features/graphql/graphqlSlice';
import authReducer from './authSlice';


const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    frequentBuys: frequentBuysReducer,
    graphql: graphqlReducer,
    auth: authReducer
  },
});

export default store;
