import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faTrashCan,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const ListItem = ({
  item,
  handleFinishClickEvent,
  handleDeleteClickEvent,
  handleEditorClickUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updateText, setUpdateText] = useState(item.noteText);
  return (
    <div className="list-item-box">
      {isEditing ? (
        <input
          type="text"
          className="list-item-input"
          onChange={(e) => setUpdateText(e.target.value)}
          value={updateText}
        />
      ) : (
        <span className="list-item-input">{item.noteText}</span>
      )}
      <div>
        <button
          className="list-item-button"
          onClick={() => {
            if (isEditing) {
              handleEditorClickUpdate(item.id, updateText);
            }
            setIsEditing(!isEditing);
          }}
        >
          <FontAwesomeIcon icon={faPencil} className="list-item-icon" />
        </button>
        <button
          className="list-item-button"
          onClick={() => {
            handleDeleteClickEvent(item.id);
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} className="list-item-icon" />
        </button>
        <button
          className="list-item-button"
          onClick={() => handleFinishClickEvent(item.id)}
        >
          <FontAwesomeIcon icon={faCircleCheck} className="list-item-icon" />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
