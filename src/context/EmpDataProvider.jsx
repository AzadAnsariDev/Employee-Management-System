import React, { createContext, useState } from 'react'

export const EmpDataContext = createContext()

const EmpDataProvider = ({children}) => {

  const [loggedInUserData, setLoggedInUserData] = useState(null)

  return (
    <div className='h-full w-full'>
        <EmpDataContext.Provider value={[loggedInUserData, setLoggedInUserData]}>
            {children}
        </EmpDataContext.Provider>
    </div>
  )
}

export default EmpDataProvider