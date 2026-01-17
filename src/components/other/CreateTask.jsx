import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const CreateTask = () => {

  const [taskMessage, setTaskMessage] = useState('')

  const [title, setTitle] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  
  const { employees, setEmployees } = useContext(AuthContext)
  const submitHandler = (e)=>{
    e.preventDefault();
    setTaskMessage("Task Assigned Successfully ✅");

  setTimeout(() => {
    setTaskMessage("");
  }, 2000);
  const task = {
  id: Date.now(),    
  title,
  category,
  description,
  date,
  active: false,
  newTask: true,
  completed: false,
  failed: false,
};

    const updatedEmployees = employees.map((elem)=>{
      if(assignTo?.toLowerCase() == elem.firstname?.toLowerCase()){
        return {
        ...elem,
        tasks: [...elem.tasks, task],
        taskNumbers: {
          ...elem.taskNumbers,
          newTask: elem.taskNumbers.newTask + 1
        }
      }
    }
    return elem;
    })
    
    setEmployees(updatedEmployees)
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    setTitle('')
    setAssignTo('')
    setCategory('')
    setDate('')
    setDescription('')
    
  }
  return (
       <div className="text-white bg-white/10 shadow-2xl border backdrop-blur-2xl border-black/60 mt-10 p-6 w-full rounded">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className="flex items-center" >
        <div className="flex flex-col items-start gap-6 w-full"> 
          <div className="w-1/2">
            <h2 className="text-sm ">Task Title</h2>
            <input
              value={title}
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
              className="border px-2 py-1 rounded outline-none w-[80%] mt-1"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-sm ">Date</h2>
            <input
              value={date}
              onChange={(e)=>{
                setDate(e.target.value)
              }}
              className="border px-2 py-1 rounded outline-none w-[80%] mt-1"
              type="date"
              placeholder="Make a UI design"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-sm ">Assign to</h2>
            <input
              value={assignTo}
              onChange={(e)=>{
                setAssignTo(e.target.value)
              }}
              className="border px-2 py-1 rounded outline-none w-[80%] mt-1"
              type="text"
              placeholder="employee name"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-sm ">Category</h2>
            <input
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
              className="border px-2 py-1 rounded outline-none w-[80%] mt-1"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-2/5">
          <h2 className='text-sm'>Description</h2>
          <textarea
          value={description}
          onChange={(e)=>{
            setDescription(e.target.value)
          }}
          className="border p-5 w-[100%] mt-1 outline-none rounded text-sm" name="" id="" cols="60" rows="10"></textarea>
          <button className="bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-400 border border-black/60 cursor-pointer px-6 py-3 w-full text-m font-semibold rounded mt-4">Create Task</button>
        </div>
        </form>
        {taskMessage && (
  <div className="fixed bottom-100 left-120 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
    {taskMessage}
  </div>
)}
      </div>

  )
}

export default CreateTask