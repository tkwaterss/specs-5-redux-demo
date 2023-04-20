import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const EmployeeScreen = () => {
  const [showNoteArea, setShowNoteArea] = useState(false);
  const { id } = useParams();
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  const {
    firstname,
    lastname,
    email,
    phone,
    position,
    salary,
    rating,
    notes,
    hireDate,
  } = employees[id];
  const noteRef = useRef();

  const toggleShow = () => setShowNoteArea(!showNoteArea);

  const submitNote = event => {
    event.preventDefault();
    const payload = {
      id,
      newNote: noteRef.current.value,
    }

    dispatch({type: 'ADD_NOTE', payload})
  }
  return (
    <div>
      <h1>
        {firstname} {lastname}
      </h1>
      <h2>Hired on {hireDate.toDateString()}</h2>
      <h3>Position: {position}</h3>
      <h3>Phone: {phone}</h3>
      <h3>Email: {email}</h3>
      <h3 className="colored-text">Salary: {salary}</h3>
      <button onClick={toggleShow}>{showNoteArea ? "Hide Box" : "Add Note"}</button>
      {showNoteArea && 
      <form onSubmiit={submitNote}>
        <textarea ref={noteRef} rows={7} cols={40}></textarea>
        <button>Save Note</button>
      </form>}
    </div>
  );
};

export default EmployeeScreen;
