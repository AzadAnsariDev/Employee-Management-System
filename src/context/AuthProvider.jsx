import React, { createContext, useEffect } from 'react'

import { useState } from 'react'
import { getData, setData } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const [employees, setEmployees] = useState([])
  
  const [admin, setAdmin] = useState(null)

useEffect(() => {
  let data = getData();

  if (!data) {
    setData();          
    data = getData();   
  }

  

  setEmployees(data.employees);
  setAdmin(data.admin);
}, []);

  return (
    <div className='h-full'>
        <AuthContext.Provider value={{employees, setEmployees, admin}}>
        {children}
        </AuthContext.Provider>
    </div>

  )
}

export default AuthProvider