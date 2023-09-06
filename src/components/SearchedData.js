import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchData } from "../features/search_slice";

const SearchedData = () => {
  const dispatch = useDispatch();
  let obj = useSelector((state) => state.search.obj);
  let isSearched = useSelector((state) => state.search.showData);
  console.log(obj[0], isSearched);
  function setSearch() {
    dispatch(searchData(false));
  }

  return (
    <div className="searched_cont">
      <div className="searched_data">
        <h4>Name:</h4>
        <label>{obj[0].name}</label>
      </div>
      <div className="searched_data">
        <h4>Handle:</h4>
        <label>{obj[0].handle}</label>
      </div>
      <div className="searched_data">
        {" "}
        <h4>Followers:</h4>
        <label>{obj[0].followers}</label>
      </div>
      <button onClick={setSearch}>X</button>
    </div>
  );
};

export default SearchedData;
