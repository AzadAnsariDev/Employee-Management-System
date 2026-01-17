import React, { useContext } from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'
import { EmpDataContext } from '../../context/EmpDataProvider'

const TaskList = () => {

 const [empData] = useContext(EmpDataContext)
    
  return (
    <div id ="tasklist" className='w-full overflow-x-auto mt-10 py-5 flex justify-start  gap-6 flex-nowrap'>
      <NewTask />
      <AcceptTask />
      <CompleteTask />
      <FailedTask />
    </div>
  )
}

export default TaskList