import React from "react";
import SearchBar from "./SearchBar";
import CreateData from "./CreateData";
import Sort from "./Sort";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import SearchedData from "./SearchedData";

const ControlBar = () => {
  let isSearched = useSelector((state) => state.search.showData);
  //console.log(obj, isSearched);
  return (
    <>
      <div className="control_bar">
        <SearchBar />
        <CreateData />
        <Sort />
      </div>
      {isSearched && <SearchedData />}
    </>
  );
};

export default ControlBar;
