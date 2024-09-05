import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGraphQLData } from '../features/graphql/graphqlSlice';

const api = () => {
  const dispatch = useDispatch();
  const { data, error, status } = useSelector((state) => state.graphql);

  useEffect(() => {
    // Define your GraphQL query
    const query = `
      query {
        someQuery {
          field1
          field2
        }
      }
    `;

    // Dispatch the thunk action to fetch data
    dispatch(fetchGraphQLData(query));
  }, [dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>GraphQL Data</h1>
      {/* Render your data here */}
      {data && data.someQuery && (
        <div>
          <p>Field1: {data.someQuery.field1}</p>
          <p>Field2: {data.someQuery.field2}</p>
        </div>
      )}
    </div>
  );
};

export default api;
