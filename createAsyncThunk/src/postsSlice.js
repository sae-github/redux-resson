import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("https://httpstat.us/404");
      if (!res.ok) {
        return rejectWithValue(`${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: false,
    errorMessage: null,
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.loading = true;
      state.posts = action.payload;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.payload;
    },
  },
});

export default postsSlice.reducer;
