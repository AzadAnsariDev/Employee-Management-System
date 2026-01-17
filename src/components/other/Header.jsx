import { useContext } from "react";
import { EmpDataContext } from "../../context/EmpDataProvider";

const Header = ({changeUser}) => {

  
  const [empData] = useContext(EmpDataContext)
  
  const userName = empData ? empData.firstname + '👋': 'Admin' + '👋'

  const logOut = () =>{
   localStorage.setItem('loggedInUser' , '')
  changeUser('')
   
  }
  return (
    <div className='flex justify-between items-center'>
        <div>
        <h1 className='text-2xl text-white '>Hello, <span className='text-2xl text-blue-300 font-semibold'>{userName}</span></h1>
        <p className="text-sm text-[#ffffff6d] tracking-wide">Employee Dashboard</p>
        </div>
        <button onClick={logOut} className='bg-gradient-to-r from-red-800 to-red-500 hover:scale-102  px-4 py-2 rounded cursor-pointer text-white'>Log Out</button>
    </div>
  )
}

export default Header