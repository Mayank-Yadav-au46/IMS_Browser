import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../features/create_data_slice";

function CreateData(props) {
  const dispatch = useDispatch();
  const isForm = useSelector((state) => state.create_data.value.creatingData);

  return (
    <div className="create_data_btn">
      <button
        onClick={() => {
          if (!isForm) {
            dispatch(toggleForm(true));
          } else {
            dispatch(toggleForm(false));
          }
        }}
      >
        Add Influencer
      </button>
    </div>
  );
}

export default CreateData;
