import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const fetch_data_slice = createSlice({
  name: "fetch_data",
  initialState,
  reducers: {
    fetch_data: async (state, action) => {
      try {
        const response = await fetch(
          "https://ims-server-u07j.onrender.com/user/get_data"
        );
        const jsonData = await response.json();
        return {
          ...state,
          value: jsonData.obj,
        };
      } catch (error) {
        console.error("Fetch error:", error);
        return state; // Return the current state in case of an error
      }
    },
  },
});

//exporting action creater
export const { fetch_data } = fetch_data_slice.actions;

//exporting reducer
export default fetch_data_slice.reducer;
