import React from "react";
import { useDispatch } from "react-redux";
import { sort_toggle } from "../features/sort_slice";

const Sort = (props) => {
  const dispatch = useDispatch();
  const sortHandle = (event) => {
    // Set sortBy state in the Body component
    dispatch(sort_toggle(event.target.value));
  };

  return (
    <div className="sort_toggle">
      <label>Sort:</label>
      <select value={props.selected} onChange={sortHandle}>
        <option value="Default">Default</option>
        <option value="Name">Name</option>
        <option value="Handle">Handle</option>
        <option value="Followers">Followers</option>
      </select>
    </div>
  );
};

export default Sort;
