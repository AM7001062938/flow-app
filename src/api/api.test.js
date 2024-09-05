import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import graphqlReducer from '../features/graphql/graphqlSlice';
import api from './api';
import { fetchGraphQLData } from '../features/graphql/graphqlSlice';

// Mock the fetchGraphQLData thunk
jest.mock('../features/graphql/graphqlSlice', () => ({
  ...jest.requireActual('../features/graphql/graphqlSlice'),
  fetchGraphQLData: jest.fn(),
}));

const store = configureStore({
  reducer: {
    graphql: graphqlReducer,
  },
});

describe('SomeComponent', () => {
  it('should render loading state', () => {
    store.dispatch(fetchGraphQLData.pending());
    render(
      <Provider store={store}>
        <SomeComponent />
      </Provider>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('should render data on success', async () => {
    const mockData = { someQuery: { field1: 'value1', field2: 'value2' } };
    store.dispatch(fetchGraphQLData.fulfilled({ data: mockData }, 'query'));

    render(
      <Provider store={store}>
        <SomeComponent />
      </Provider>
    );

    expect(await screen.findByText(/Field1: value1/i)).toBeInTheDocument();
    expect(screen.getByText(/Field2: value2/i)).toBeInTheDocument();
  });

  it('should render error state', async () => {
    store.dispatch(fetchGraphQLData.rejected(new Error('An error occurred')));

    render(
      <Provider store={store}>
        <SomeComponent />
      </Provider>
    );

    expect(await screen.findByText(/Error: An error occurred/i)).toBeInTheDocument();
  });
});
