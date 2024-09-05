import { fetchGraphQLData } from './graphqlSlice';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { configureStore } from '@reduxjs/toolkit';
import graphqlReducer from './graphqlSlice';

const mock = new MockAdapter(axios);

// Configure a mock store
const store = configureStore({
  reducer: {
    graphql: graphqlReducer,
  },
});

describe('fetchGraphQLData thunk', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should handle a successful API response', async () => {
    const query = `
      query {
        someQuery {
          field1
          field2
        }
      }
    `;
    const mockData = { data: { someQuery: { field1: 'value1', field2: 'value2' } } };

    mock.onPost('https://circleapi.sainyamitra.in/v1/graphql').reply(200, mockData);

    await store.dispatch(fetchGraphQLData(query));

    const state = store.getState();
    expect(state.graphql.status).toBe('succeeded');
    expect(state.graphql.data.someQuery.field1).toBe('value1');
  });

  it('should handle an API error response', async () => {
    const query = `
      query {
        someQuery {
          field1
          field2
        }
      }
    `;

    mock.onPost('https://circleapi.sainyamitra.in/v1/graphql').reply(400, { error: 'Bad Request' });

    await store.dispatch(fetchGraphQLData(query));

    const state = store.getState();
    expect(state.graphql.status).toBe('failed');
    expect(state.graphql.error).toEqual({ error: 'Bad Request' });
  });
});
