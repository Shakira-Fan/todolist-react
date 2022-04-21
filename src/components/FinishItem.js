import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Finishitem = ({
  item,
  handleFinishClickEvent,
  handleDeleteClickEvent,
}) => {
  return (
    <div className="list-item-box">
      <span className="list-item-input">{item.noteText}</span>
      <div>
        <button
          className="list-item-button"
          onClick={() => {
            handleDeleteClickEvent(item.id);
            console.log(item.id);
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} className="list-item-icon" />
        </button>
        <button
          className="list-item-button"
          onClick={() => handleFinishClickEvent(item.id)}
        >
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="list-item-icon finish"
          />
        </button>
      </div>
    </div>
  );
};

export default Finishitem;
