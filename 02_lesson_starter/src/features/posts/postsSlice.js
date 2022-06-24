import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: "1", title: "Learning redux toolkit", content: "Redux is great to use as global state " },
  { id: "2", title: "Slices here and slices there", content: "The more i slice the more pieces i get" },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

  }
})

export default postsSlice.reducer;