import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    sort_opt: "Default",
  },
};

export const sort_slice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    sort_toggle: (state, action) => {
      state.value.sort_opt = action.payload;
    },
  },
});

//exporting action creater
export const { sort_toggle } = sort_slice.actions;

//exporting reducer
export default sort_slice.reducer;
