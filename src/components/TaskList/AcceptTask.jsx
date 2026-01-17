import React, { useContext } from "react";
import { EmpDataContext } from "../../context/EmpDataProvider";
import { AuthContext } from "../../context/AuthProvider";

const AcceptTask = () => {

const [loggedInUserData, setLoggedInUserData] = useContext(EmpDataContext)

const {employees, setEmployees} = useContext(AuthContext)

const { tasks = [] } = loggedInUserData || {}

const activeTasks = tasks.filter(task => task.active);

// Function For Mark as Complted
const markCompleted = (clickedTask) => {
const updatedTasks = tasks.map(task =>
    task === clickedTask
      ? { ...task, completed: true, active: false } 
      : task

  );

  const updatedEmployee = {
    ...loggedInUserData,
    tasks: updatedTasks,
    taskNumbers: {
    ...loggedInUserData.taskNumbers,
    completed: loggedInUserData.taskNumbers.completed + 1,
    active: loggedInUserData.taskNumbers.active - 1
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

//Function For Mark As failed
const markFailed = (clickedTask) => {
  const updatedTasks = tasks.map(task =>
    task === clickedTask
      ? { ...task, failed: true, active: false } 
      : task

  );

  const updatedEmployee = {
    ...loggedInUserData,
    tasks: updatedTasks,
    taskNumbers: {
    ...loggedInUserData.taskNumbers,
    failed: loggedInUserData.taskNumbers.failed + 1,
    active: loggedInUserData.taskNumbers.active - 1
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
  
  return (
    activeTasks.map((task)=>{
      return   <div className="flex flex-col gap-2 w-70   border border-white/10  shadow-2xl shadow-black/60 bg-gradient-to-r bg-white/10 backdrop-blur-2xl flex-shrink-0 rounded-2xl p-5 text-white">
      <div className="flex justify-between items-center ">
        <h2 className="bg-gradient-to-br from-red-800 via-red-700 to-red-400  text-sm px-3 py-1 rounded">{task.category}</h2>
        <h3 className="text-sm text-white/60">{task.date}</h3>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{task.title}</h2>
      <p className="mt-2 text-sm text-white/60">
      {task.description}
      </p>
      <div className="flex gap-2 mt-4 ">
        <button
        onClick={()=>{
          markCompleted(task)
        }}
        className="px-1 py-1 bg-gradient-to-br from-[#0dcfc5] to-slate-800 rounded text-sm cursor-pointer hover:scale-102">Mark as Completed</button>
        <button 
        onClick={()=>{
          markFailed(task)
        }}
        className="px-1 py-1 hover:scale-102 cursor-pointer bg-gradient-to-br from-rose-500 to-slate-800  rounded text-sm cursor-pointer">Mark as Failed</button>
      </div>
    </div>
    })


  );
};

export default AcceptTask;
