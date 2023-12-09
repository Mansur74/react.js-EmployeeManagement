import React from 'react'
import { Link } from 'react-router-dom'
import { Employee } from '../../../db'

interface Props {
  employee: Employee
}

const EmployeeCard = ({employee}: Props) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

        <div className="card-body">
          <p className="card-text">{employee.firstName} {employee.lastName}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link to={`${employee.id}`} className='btn btn-sm btn-outline-secondary'>
                View
              </Link>
              <Link to="" className='btn btn-sm btn-outline-secondary'>
                Edit
              </Link>
            </div>
            <small className="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeCard