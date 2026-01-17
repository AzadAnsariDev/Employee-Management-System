import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = ({changeUser}) => {

 
  return (
    <div className="p-10 min-h-screen bg-gradient-to-br from-[#1a2848] via-[#020617] to-[#010415]">
      <Header changeUser = {changeUser}/>
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
