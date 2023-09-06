import React, { useState, useEffect } from "react";
import Data from "./Data";
import { useSelector } from "react-redux";

const Body = (props) => {
  const [data, setData] = useState([]);
  // const [sortBy, setSortBy] = useState("Default"); // Default sorting
  const sortBy = useSelector((state) => state.sort.value.sort_opt);

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

  // Callback function to handle editing
  const handleEdit = async (editedData) => {
    try {
      const response = await fetch(
        `https://ims-server-u07j.onrender.com/user/edit_data/${editedData._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedData),
        }
      );

      // Check if the edit was successful (you might want to handle errors here)
      if (response.ok) {
        // Refetch the data to get the updated values
        const response = await fetch(
          "https://ims-server-u07j.onrender.com/user/get_data"
        );
        const jsonData = await response.json();
        setData(jsonData.obj);
      } else {
        console.error("Edit request failed");
      }
    } catch (error) {
      console.error("Error in editing data:", error);
    }
  };

  // Callback function to handle delete
  const handleDelete = async (dataId) => {
    try {
      const response = await fetch(
        `https://ims-server-u07j.onrender.com/user/delete_data/${dataId}`,
        {
          method: "DELETE",
        }
      );

      // Check if the delete was successful (you might want to handle errors here)
      if (response.ok) {
        // Filter out the deleted item from the data array
        const updatedData = data.filter((item) => item._id !== dataId);
        setData(updatedData);
      } else {
        console.error("Delete request failed");
      }
    } catch (error) {
      console.error("Error in deleting data:", error);
    }
  };

  // Function to sort data based on the selected option
  const sortData = (dataToSort) => {
    switch (sortBy) {
      case "Name":
        return [...dataToSort].sort((a, b) => a.name.localeCompare(b.name));
      case "Handle":
        return [...dataToSort].sort((a, b) => a.handle.localeCompare(b.handle));
      case "Followers":
        return [...dataToSort].sort((a, b) => a.followers - b.followers);
      default:
        return dataToSort; // Default sorting, no changes
    }
  };

  const sortedData = sortData(data);

  return (
    <div>
      <fieldset className="content">
        {sortedData.map((item) => (
          <Data
            key={item._id}
            data={item}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </fieldset>
    </div>
  );
};

export default Body;
