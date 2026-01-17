import React, { useContext } from 'react'
import { EmpDataContext } from '../../context/EmpDataProvider'

const TaskStatus = () => {
    
    const [empData] = useContext(EmpDataContext)
  return (
    <div className='flex screen mt-10 gap-4'>
        <div className='w-[45%] bg-gradient-to-r from-amber-400/70 to-gray-600/30 p-5 text-white rounded '>
            <h2 className='text-2xl font-bold'>{empData.taskNumbers.active}</h2>
            <h3 className='text-xl font-semibold'>Active Task</h3>
        </div>
        <div className='w-[45%] bg-gradient-to-r from-blue-400/70 to-gray-600/40 p-5 text-white rounded '>
            <h2 className='text-2xl font-bold'>{empData.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-semibold'>New Task</h3>
        </div>
        <div className='w-[45%] bg-gradient-to-r from-green-400/70 to-gray-600/40 p-5 text-white rounded '>
            <h2 className='text-2xl font-bold'>{empData.taskNumbers.completed}</h2>
            <h3 className='text-xl font-semibold'>Completed Task</h3>
        </div>
        <div className='w-[45%] bg-gradient-to-r from-red-400/70 to-gray-600/40 p-5 text-white rounded '>
            <h2 className='text-2xl font-bold'>{empData.taskNumbers.failed}</h2>
            <h3 className='text-xl font-semibold'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskStatus