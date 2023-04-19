import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const EmployeeScreen = () => {
  const {id} = useParams()
  const employees = useSelector((state) => state.employees)
  const dispatch = useDispatch();
  const {firstname, lastname, email, phone, position, salary, rating, notes, hireDate} = employees[id]


  return (
    <div>
      <h1>{firstname} {lastname}</h1>
      <h2>Hired on {hireDate.toDateString()}</h2>
      <h3>Position: {position}</h3>
      <h3>Phone: {phone}</h3>
      <h3>Email: {email}</h3>
      <h3 className="colored-text">Salary: {salary}</h3>

    </div>
  )
}

export default EmployeeScreen