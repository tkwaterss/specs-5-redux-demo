import React from 'react'
import {useSelector} from 'react-redux'
import EmployeeCard from '../components/EmployeeCard'

const AdminScreen = () => {
  const employees = useSelector((state) => state.employees)

  const displayEmps = employees.map((emp, index) => {
    return <EmployeeCard details={emp} index={index}/>
  })

  return (
    <div>
      <h1>Employees</h1>
      {displayEmps}
    </div>
  )
}

export default AdminScreen