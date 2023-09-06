import { configureStore } from "@reduxjs/toolkit";

import create_data_reducer from "../features/create_data_slice";
import fetch_data_reducer from "../features/app_slice";
import data_form_reducer from "../features/data_form_slice";
import sort_reducer from "../features/sort_slice";
import search_reducer from "../features/search_slice";

export const store = configureStore({
  reducer: {
    create_data: create_data_reducer,
    fetch_data: fetch_data_reducer,
    data_created: data_form_reducer,
    sort: sort_reducer,
    search: search_reducer,
  },
});
