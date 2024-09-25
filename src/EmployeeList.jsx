import React from 'react';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp, index) => (
          <tr key={emp.id}>
            <td>{index + 1}</td>
            <td>{emp.username}</td>
            <td>{emp.email}</td>
            <td>{emp.status}</td>
            <td>
              <button onClick={() => onEdit(emp)}>Edit</button>
              <button onClick={() => onDelete(emp.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
