import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ selectedEmployee, onSave }) => {
  const [employee, setEmployee] = useState({ username: '', email: '', status: 'active' });

  useEffect(() => {
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.username && employee.email) {
      onSave(employee);
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={employee.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <select
          name="status"
          value={employee.status}
          onChange={handleChange}
          required
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default EmployeeForm;
