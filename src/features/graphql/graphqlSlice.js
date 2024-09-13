import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an Axios instance
const axiosInstance = axios.create({
  baseURL: "https://circleapi.sainyamitra.in/v1/graphql",
  headers: {
    "Content-Type": "application/json",
    "x-hasura-admin-secret": "legalpwd123",
  },
});

// Async thunk for fetching GraphQL data
export const fetchGraphQLData = createAsyncThunk(
  "graphql/fetchData",
  async (query, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("", {
        query,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const graphqlSlice = createSlice({
  name: "graphql",
  initialState: {
    data: null,
    error: null,
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGraphQLData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchGraphQLData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
      })
      .addCase(fetchGraphQLData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default graphqlSlice.reducer;
