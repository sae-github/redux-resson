import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {},
});

// const fetchPostsData = () => {
//   return async () => {
//     try {
//       const posts = await
//     }
//   }
// }
