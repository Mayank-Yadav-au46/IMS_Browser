import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { data_created_func, new_data } from "../features/data_form_slice";
import { toggleForm } from "../features/create_data_slice";

function DataForm(props) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(toggleForm(false));
    // Create a new data object
    const newData = {
      name: name,
      handle: handle,
      followers: number,
    };

    try {
      const response = await fetch(
        "https://ims-server-u07j.onrender.com/user/create_data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newData),
        }
      );

      if (response.ok) {
        console.log("Data created successfully");

        // Invoke the callback function to add data to the parent component
        props.on_creation(newData);
        dispatch(new_data(newData));

        // Clear the input fields
        setName("");
        setHandle("");
        setNumber("");
      } else {
        console.error("Error creating data");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="data_form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Handle:</label>
          <input
            type="text"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
          />
        </div>
        <div>
          <label>Followers:</label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default DataForm;
