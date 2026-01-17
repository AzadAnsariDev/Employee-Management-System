import React, { useContext } from 'react'
import Header from '../other/Header'
import TaskStatus from '../other/TaskStatus'
import TaskList from '../TaskList/TaskList'
import { EmpDataContext } from '../../context/EmpDataProvider'

const EmployeeDashboard = ({changeUser}) => {
  
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#1a2848] via-[#020617] to-[#010415] p-10'>
        <Header changeUser = {changeUser}/>
        <TaskStatus />
        <TaskList />
    </div>

  )
}

export default EmployeeDashboard