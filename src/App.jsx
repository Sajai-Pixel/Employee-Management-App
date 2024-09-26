import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import Header from './Header'
import './App.css'

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const res = await axios.get('https://employee-server-dpao.onrender.com/employees');
    setEmployees(res.data);
  };

  const handleSave = async (employee) => {
    if (employee.id) {
      await axios.put(`https://employee-server-dpao.onrender.com/employees/${employee.id}`, employee);
    } else {
      await axios.post('https://employee-server-dpao.onrender.com/employees', employee);
    }
    fetchEmployees();
    setSelectedEmployee(null);
  };

  // Fix: Define handleEdit here
  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://employee-server-dpao.onrender.com/employees/${id}`);
    fetchEmployees();
  };

  return (
    <div>
      <Header/>
      <EmployeeForm selectedEmployee={selectedEmployee} onSave={handleSave} />
      <EmployeeList employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
