import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    creatingData: false,
  },
};

export const create_data_slice = createSlice({
  name: "create_data",
  initialState,
  reducers: {
    toggleForm: (state, action) => {
      state.value.creatingData = action.payload;
    },
  },
});

//exporting action creater
export const { toggleForm } = create_data_slice.actions;

//exporting reducer
export default create_data_slice.reducer;
