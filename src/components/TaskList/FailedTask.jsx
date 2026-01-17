import React, { useContext } from "react";
import { EmpDataContext } from "../../context/EmpDataProvider";

const FailedTask = () => {
  const [loggedInUserData] = useContext(EmpDataContext)

  const { tasks = [] } = loggedInUserData || {}

  const failedTask = tasks.filter((task)=>task.failed)
  return (
      failedTask.map((task)=>{
      return    <div className="flex flex-col gap-2 w-70  border border-white/10  shadow-2xl shadow-black/60 bg-gradient-to-r bg-white/10 backdrop-blur-2xl flex-shrink-0 rounded-2xl p-5 text-white">
      <div className="flex justify-between items-center ">
        <h2 className="bg-gradient-to-br from-red-800 via-red-700 to-red-400 text-sm px-3 py-1 rounded">{task.category}</h2>
        <h3 className="text-sm text-white/60">{task.date}</h3>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{task.title}</h2>
      <p className="mt-2 text-sm text-white/60">
       {task.description}
      </p>
      <div>
        <button className="px-2 py-1  bg-gradient-to-tl from-rose-900 via-rose-700 to-rose-600 rounded text-sm mt-4">Failed</button>
      </div>
    </div>
    })

  );
};

export default FailedTask;
