import React from "react";
import { useRef } from "react";

const AddEmployeeScreen = () => {
  const firstRef = useRef();
  const lastRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const salaryRef = useRef();
  const positionRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const newEmp = {
      firstname: firstRef.current.value,
      lastname: lastRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      salary: salaryRef.current.value,
      position: positionRef.current.value,
      notes: [],
      rating: null,
      hireDate: new Date(),
    };

    console.log(newEmp);

  };

  return (
    <div>
      <h1>Onboard Employee</h1>
      <form className="card" onSubmit={submitHandler}>
        <input ref={firstRef} type="text" placeholder="First" />
        <input ref={lastRef} type="text" placeholder="Last" />
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={phoneRef} type="phone" placeholder="Phone" />
        <input ref={salaryRef} type="number" placeholder="Salary" />
        <input ref={positionRef} type="text" placeholder="Position" />
        <button>Add :)</button>
      </form>
    </div>
  );
};

export default AddEmployeeScreen;
