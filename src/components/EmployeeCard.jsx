import React from 'react'
import {Link} from 'react-router-dom'

const EmployeeCard = (props) => {
  const {details, index} = props
  return (
    <Link to={`/employee/${index}`}>
    <div className="card">
      <h2>{details.lastname}, {details.firstname}</h2>
      <h4>{details.position}</h4>
    </div>
    </Link>
  )
}

export default EmployeeCard