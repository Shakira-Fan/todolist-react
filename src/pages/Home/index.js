import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

import Finishitem from "../../components/FinishItem";
import ListItem from "../../components/ListItem";

import { v4 } from "uuid";
const Home = () => {
  const [noteArr, setNoteArr] = useState([]);
  const [note, setNote] = useState({
    id: 0,
    noteText: "",
    isfinish: false,
  });

  const handleEditorClickUpdate = (id, note) => {
    const index = noteArr.findIndex((ele) => ele.id === id);
    let item = noteArr[index];
    item = { ...item, noteText: note };
    const newArr = [...noteArr];
    newArr[index] = item;
    setNoteArr(newArr);
  };

  const handleFinishClickEvent = (id) => {
    const index = noteArr.findIndex((ele) => ele.id === id);
    let item = noteArr[index];
    item = { ...item, isfinish: !item.isfinish };
    const newArr = [...noteArr];
    newArr[index] = item;
    setNoteArr(newArr);
  };

  const handleDeleteClickEvent = (id) => {
    const newArr = noteArr.filter((ele) => ele.id !== id);
    setNoteArr(newArr);
  };
  console.log(noteArr);
  return (
    <div className="box">
      <div className="text-box">
        <h1>TO-DO LIST</h1>
        <div className="add">
          <input
            type="text"
            className="add-input"
            placeholder="請輸入代辦事項"
            value={note.noteText}
            onChange={(e) => setNote({ ...note, noteText: e.target.value })}
          />
          <button
            className="add-button"
            onClick={() => {
              setNoteArr(noteArr.concat({ ...note, id: v4() }));
            }}
          >
            <FontAwesomeIcon icon={faCirclePlus} className="add-icon" />
          </button>
        </div>
        <div className="list">
          <h3>代辦事項</h3>
          {noteArr
            .filter(({ isfinish }) => !isfinish)
            .map((item) => (
              <ListItem
                key={item.id}
                item={item}
                handleFinishClickEvent={handleFinishClickEvent}
                handleDeleteClickEvent={handleDeleteClickEvent}
                handleEditorClickUpdate={handleEditorClickUpdate}
              />
            ))}
        </div>
        <div className="list">
          <h3>已完成事項</h3>
          {noteArr
            .filter(({ isfinish }) => isfinish)
            .map((item) => (
              <Finishitem
                key={item.id}
                item={item}
                handleFinishClickEvent={handleFinishClickEvent}
                handleDeleteClickEvent={handleDeleteClickEvent}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
