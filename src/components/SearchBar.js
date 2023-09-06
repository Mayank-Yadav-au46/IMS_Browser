import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchData, searchedObj } from "../features/search_slice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searched, setSearched] = useState(false);
  const [name, setName] = useState("");
  const [selectedOption, setSelectedOption] = useState("Name");
  const [data, setData] = useState([]);
  const [showData, setshowData] = useState([]);

  useEffect(() => {
    // Function to make the initial fetch call
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ims-server-u07j.onrender.com/user/get_data"
        );
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData.obj);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchData();
  }, []);

  function searchHandle(e) {
    e.preventDefault();
    const searchBy = selectedOption === "Name" ? "name" : "handle";
    const searchValue = name.toLowerCase();
    const foundData = data.filter(
      (item) => item[searchBy].toLowerCase() === searchValue
    );

    if (foundData.length === 0) {
      alert("Incorrect Data");
    } else {
      console.log(foundData);
      setshowData(foundData);
      dispatch(searchData(true));
      dispatch(searchedObj(foundData));
    }
  }

  return (
    <form className="search_bar">
      <button type="submit" onClick={searchHandle}>
        Search
      </button>
      <select
        className="search_select"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="Name">Name</option>
        <option value="Handle">Handle</option>
      </select>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
