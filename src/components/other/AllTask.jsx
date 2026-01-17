import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
   const {employees, setEmployees} = useContext(AuthContext)
   console.log(employees);
   

  let getStatus = (task)=>{
    if(task.active) return " (Active)"
    if(task.failed) return " (Failed)"
    if(task.completed) return " (Completed)"
    if(task.newTask) return " (NewTask)"
  }

  const deleteEmployee = (empId) =>{
    
    let remainingEmp = employees.filter(emp => emp.id !== empId)

    setEmployees(remainingEmp)
    localStorage.setItem("employees", JSON.stringify(remainingEmp));
  }


  const deleteTask = (empId, taskId, task) =>{
   const updatedEmployees = employees.map((emp)=>{
      if(empId !== emp.id) return emp;
      const updatedTasks = emp.tasks.filter(t => t.id !== taskId );
      
    return {
      ...emp,
      tasks : updatedTasks,
      taskNumbers : {
        newTask: updatedTasks.filter(t => t.newTask).length,
        active: updatedTasks.filter(t => t.active).length,
        completed: updatedTasks.filter(t => t.completed).length,
      failed: updatedTasks.filter(t => t.failed).length
    }
  }
    })

    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));


    const logged = JSON.parse(localStorage.getItem("loggedInUser"));

if (logged?.role === "employee") {
  const freshEmployee = updatedEmployees.find(
    emp => emp.id === logged.data.id
  );

  if (freshEmployee) {
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        ...logged,
        data: freshEmployee
      })
    );
  }
}

  }


  return (
    <div
      id="alltask"
      className="text-white bg-white/10 shadow-2xl border backdrop-blur-2xl border-black/60  p-6 mt-10 rounded-xl shadow-lg space-y-4"
    >
  <h2 className="text-xl text-white mb-6">
    Employee Task Manager
  </h2>
      {/* HEADER */}
      <div className="grid grid-cols-7 bg-indigo-600 px-4 py-3 rounded-lg text-white text-sm font-semibold tracking-wide">
        <div className="text-center">Id</div>
        <div className="text-center">Employee</div>
        <div className="text-center">New</div>
        <div className="text-center">Active</div>
        <div className="text-center">Completed</div>
        <div className="text-center">Failed</div>
        <div>Delete Employee</div>
      </div>

      {/* ROWS */}
      <div className="max-h-[150px] overflow-y-auto scroll-smooth space-y-2">
        {(employees || []).map((emp) => (
          <div
            key={emp.id}
            className="grid grid-cols-7 bg-zinc-800 px-4 py-3 rounded-lg text-sm text-zinc-100 hover:bg-zinc-700 transition"
          >
            {/* Employee Name */}
            <div className="text-center font-medium">{emp.id}</div>

            {/* Employee Name */}
            <div className="text-center font-medium">{emp.firstname}</div>

            {/* New */}
            <div className="flex justify-center gap-4">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 font-semibold">
                {emp.taskNumbers?.newTask}
              </span>
            </div>
            

            {/* Active */}
            <div className="flex justify-center">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
                {emp.taskNumbers?.active}
              </span>
            </div>

            {/* Completed */}
            <div className="flex justify-center">
              <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 font-semibold">
                {emp.taskNumbers?.completed}
              </span>
            </div>

            {/* Failed */}
            <div className="flex justify-center">
              <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 font-semibold">
                {emp.taskNumbers?.failed}
              </span>
            </div>

          {/* Delete Employee */}
            <button
              onClick={()=>{
                deleteEmployee(emp.id)
              }}
              className="flex justify-center bg-gradient-to-r from-red-950 via-red-700 to-rose-600 px-1 py-1 rounded">
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="mt-10 bg-zinc-900 p-6 rounded-xl">

  
{/* Employees Task Manager */}

  {employees.map(emp => (
    <div key={emp.id} className="mb-6">

      <h3 className="text-indigo-400 font-semibold mb-2">
        {emp.firstname}
      </h3>

      {emp.tasks.length ==0 && (
        <p className="text-white bg-[#27272A] p-3 rounded mb-2">No Task Yet</p>
      )}
      {emp.tasks.length > 0 && (

        <div>
          
      {emp.tasks.map(task => (
        <div key={task.id} className="flex justify-between bg-zinc-800 p-3 rounded mb-2">
          
          <div>
            <p>{task.title}</p>
          </div>

          <div>
             <span> Status : {getStatus(task)}</span>
          </div>

          <button 
          onClick={()=>{
            deleteTask(emp.id, task.id)
          }}
          className="px-1 py-1 hover:bg-red-600 cursor-pointer bg-red-800 rounded">Delete</button>

        </div>
      ))}

        </div>

      )}

    </div>
  ))}

</div>

    </div>
  );
};

export default AllTask;
