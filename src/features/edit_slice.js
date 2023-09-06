import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showForm: false,
  obj: {},
};

export const edit_slice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    edit_form_toggle: (state, action) => {
      state.showForm = action.payload;
    },
  },
});

//exporting action creater
export const { edit_form_toggle } = edit_slice.actions;

//exporting reducer
export default edit_slice.reducer;
