import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showData: false,
  obj: {},
};

export const search_slice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchData: (state, action) => {
      state.showData = action.payload;
    },
    searchedObj: (state, action) => {
      state.obj = action.payload;
      console.log(state.obj);
    },
  },
});

//exporting action creater
export const { searchData, searchedObj } = search_slice.actions;

//exporting reducer
export default search_slice.reducer;
