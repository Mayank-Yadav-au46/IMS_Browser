import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { edit_form_toggle } from "../features/edit_slice";

const Data = (props) => {
  const dispatch = useDispatch();
  let show_edit_form = useSelector((state) => state.edit.showForm);
  const { data, onEdit, onDelete } = props;
  const [isEdit, setEdit] = useState(false);
  const [editedData, setEditedData] = useState({ ...data });

  // Handle functions
  const editHandle = () => {
    if (!isEdit) {
      setEdit(true);
      dispatch(edit_form_toggle(true));
    } else setEdit(false);
  };
  const delete_handle = (e) => {
    onDelete(data._id);
  };

  const edit_submit = (e) => {
    e.preventDefault();
    // Call the callback function to handle editing
    onEdit(editedData);
    console.log(show_edit_form);
    if (show_edit_form == false) {
      setEdit(false);
    }
  };

  return (
    <>
      <div className="data_cont">
        <div className="data">
          <div className="data_name">
            <label>{data.name}</label>
          </div>
          <div className="data_handle">
            <label>{data.handle}</label>
          </div>
          <div className="followers">
            <label>{data.followers}</label>
          </div>
        </div>
        <div className="data_btn">
          <button className="data_edit" onClick={editHandle}>
            edit
          </button>
          <button className="data_delete" onClick={delete_handle}>
            X
          </button>
        </div>
      </div>

      {isEdit && (
        <div className="edit_form">
          <form onSubmit={edit_submit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                value={editedData.name}
                onChange={(e) =>
                  setEditedData({ ...editedData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label>Handle:</label>
              <input
                type="text"
                value={editedData.handle}
                onChange={(e) =>
                  setEditedData({ ...editedData, handle: e.target.value })
                }
              />
            </div>
            <div>
              <label>Followers:</label>
              <input
                type="text"
                value={editedData.followers}
                onChange={(e) =>
                  setEditedData({
                    ...editedData,
                    followers: e.target.value,
                  })
                }
              />
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Data;
