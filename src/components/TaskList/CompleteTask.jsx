import React, { useContext } from "react";
import { EmpDataContext } from "../../context/EmpDataProvider";

const CompleteTask = () => {
  const [loggedInUserData] = useContext(EmpDataContext)
  
  const { tasks = [] } = loggedInUserData || {}

  const completedTask  = tasks.filter((task)=> task.completed ) 

  return (
    completedTask.map((task)=>{
      return   <div className="flex flex-col gap-2 w-70  border border-white/10  shadow-2xl shadow-black/60 bg-gradient-to-r bg-white/10 backdrop-blur-2xl flex-shrink-0 rounded-2xl p-5 text-white">
      <div className="flex justify-between items-center ">
        <h2 className="bg-gradient-to-br from-red-800 via-red-700 to-red-400  text-sm px-3 py-1 rounded">{task.category}</h2>
        <h3 className="text-sm text-white/60">{task.date}</h3>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{task.title}</h2>
      <p className="mt-2 text-sm text-white/60">
        {task.description}
      </p>
      <div>
        <button className="px-2 py-1  bg-gradient-to-r from-lime-900 via-lime-700 to-lime-500 rounded text-sm mt-4">Completed</button>
      </div>
      <div></div>
    </div>
    })

  );
};

export default CompleteTask;
