import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getData, setData } from './utils/LocalStorage'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider'
import { EmpDataContext } from './context/EmpDataProvider'
import SignUp from './components/Auth/SignUp'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  // setData()

  const [user, setUser] = useState(null);

  const {employees, setEmployees} = useContext(AuthContext) 

  const [loggedInUserData, setLoggedInUserData]  = useContext(EmpDataContext)
  
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
  //  localStorage.clear()
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])

const handleLogin = (email, password) => {

  // ADMIN LOGIN
  if (email === 'admin@me.com' && password === '123') {
    setUser('admin')
    localStorage.setItem(
      'loggedInUser',
      JSON.stringify({ role: 'admin' })
    )
    return
  }

  // EMPLOYEE LOGIN
  if (employees && employees.length > 0) {
    const employee = employees.find(
      (e) => e.email === email && e.pass === password
    )

    if (employee) {
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'employee', data: employee })
      )
      return
    }
  }

  alert('Invalid Credentials, Please try again!')
}


  const handleSignUp = (firstname, email, pass) =>{
    const existedUser = employees.find(emp => emp.email == email)
    if(existedUser){
      alert("Email already Exists!")
      return
    }

    const newEmployee = {
    id: Date.now(),
    firstname,
    email,
    pass: pass,
    tasks: [],
    taskNumbers: {
      newTask: 0,
      active: 0,
      completed: 0,
      failed: 0
    }

    };

    const updatedEmployees = [...employees, newEmployee];

    setEmployees(updatedEmployees);

      localStorage.setItem("employees", JSON.stringify(updatedEmployees));

  localStorage.setItem(
    "loggedInUser",
    JSON.stringify({ role: "employee", data: newEmployee })
  );

  setLoggedInUserData(newEmployee);
  setUser("employee");
  }

return (
  <>
  <Routes>
    {!user && (
      <>
        <Route path="/" element={<SignUp handleSignUp={handleSignUp} />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp handleSignUp={handleSignUp} />} />

      </>
    )}

    {user === "admin" && (
      <Route path="*" element={<AdminDashboard changeUser={setUser} />} />
    )}

    {user === "employee" && (
      <Route path="*" element={<EmployeeDashboard changeUser={setUser} />} />
    )}
  </Routes>


  </>
);

}

export default App