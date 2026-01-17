import React, { useContext } from "react";
import { EmpDataContext } from "../../context/EmpDataProvider";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = () => {
  const [loggedInUserData, setLoggedInUserData] = useContext(EmpDataContext);  

  const {employees, setEmployees} = useContext(AuthContext)

  const { tasks = [] } = loggedInUserData || {};

  // Sirf new tasks filter karo
  const newTasks = tasks.filter(task => task.newTask);

const takeTask = (clickedTask) => {

  const updatedTasks = tasks.map(task =>
    task === clickedTask
      ? { ...task, newTask: false, active: true } 
      : task

  );

  const updatedEmployee = {
    ...loggedInUserData,
    tasks: updatedTasks,
    taskNumbers: {
    ...loggedInUserData.taskNumbers,
    newTask: loggedInUserData.taskNumbers.newTask - 1,
    active: loggedInUserData.taskNumbers.active + 1
  }
  };

  setLoggedInUserData(updatedEmployee);

  const updatedEmployees = employees.map(emp =>
    emp.id === updatedEmployee.id ? updatedEmployee : emp
  );

  setEmployees(updatedEmployees);
  
  localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  
  const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (loggedUser) {
  const updatedLoggedUser = {
    ...loggedUser,
    data: updatedEmployee
  };

  localStorage.setItem("loggedInUser", JSON.stringify(updatedLoggedUser));
} 
};


  let getStatus = (task)=>{
    if(task.active) return " Active"
    if(task.failed) return " Failed"
    if(task.completed) return " Completed"
    if(task.newTask) return " NewTask"
  }



  return (
    <div className="flex gap-4 ">
      {newTasks.map((task, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 w-70  border border-white/10  shadow-2xl shadow-black/60 bg-gradient-to-r bg-white/10 backdrop-blur-2xl flex-shrink-0 rounded-2xl p-5 text-white"
        >

          <div className="flex justify-between items-center">
            <h2 className="bg-gradient-to-br from-red-800 via-red-700 to-red-400 text-sm px-3 py-1 rounded">
              {task.category}
            </h2>
            <h3 className="text-sm text-white/60">{task.date}</h3>
          </div>

          <h2 className="mt-5 text-2xl font-semibold">
            {task.title}
          </h2>

          <p className="mt-2 text-sm text-white/60">
            {task.description}
          </p>

          <button onClick={()=>{
            takeTask(task);
          }} className="px-3 py-1 cursor-pointer hover:scale-102 bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-500 cursor-pointer rounded text-sm mt-4">
            Accept Task 
          </button>
        </div>
      ))}
    </div>
  );
};

export default NewTask;
