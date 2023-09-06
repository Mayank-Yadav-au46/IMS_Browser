import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    data_created: false,
    newData: {},
  },
};

export const data_form_slice = createSlice({
  name: "data_created",
  initialState,
  reducers: {
    data_created_func: (state, action) => {
      state.value.data_created = action.payload;
    },
    new_data: (state, action) => {
      state.value.newData = action.payload;
      console.log(state.value.newData);
    },
  },
});

//exporting action creater
export const { data_created_func, new_data } = data_form_slice.actions;

//exporting reducer
export default data_form_slice.reducer;
