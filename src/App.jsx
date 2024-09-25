import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import EmployeeForm from './EmployeeForm'; 
import EmployeeList from './EmployeeList';
import './App.css'
import Header from './Header';

const App = () => {
  const [employees, setEmployees] = useState([]); 
  const [selectedEmployee, setSelectedEmployee] = useState(null); 

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get('http://localhost:5000/employees'); 
      setEmployees(res.data); 
    } catch (error) {
      console.error("Error fetching employees", error); 
    }
  };

  const handleSave = async (employee) => {
    try {
      if (employee.id) {
        await axios.put(`http://localhost:5000/employees/${employee.id}`, employee);
      } else {
        await axios.post('http://localhost:5000/employees', employee);
      }
      fetchEmployees();
      setSelectedEmployee(null); 
    } catch (error) {
      console.error("Error saving employee", error); 
    }
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee); 
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/employees/${id}`); 
      fetchEmployees(); 
    } catch (error) {
      console.error("Error deleting employee", error); 
    }
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
