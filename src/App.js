import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import ControlBar from "./components/ControlBar";
import { useDispatch, useSelector } from "react-redux";
import DataForm from "./components/DataForm";
import { data_created_func } from "./features/data_form_slice";
import DataName from "./components/DataName";

function App() {
  const dispatch = useDispatch();
  let isForm = useSelector((state) => state.create_data.value.creatingData);
  let isDataCreated = useSelector(
    (state) => state.data_created.value.data_created
  );

  const create_data_handle = (new_data) => {
    // Update the local state with the newly created data
    dispatch(data_created_func(true));
  };

  useEffect(() => {
    // Check if isDataCreated is true, and if so, reload the page
    if (isDataCreated) {
      window.location.reload();
    }
  }, [isDataCreated]);

  return (
    <div className="home">
      <Header />
      <ControlBar />
      {isForm && <DataForm on_creation={create_data_handle} />}
      <DataName />
      <Body />
    </div>
  );
}

export default App;
