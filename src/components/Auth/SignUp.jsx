import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = ({handleSignUp}) => {
        const [email, setEmail] = useState('')
        const [userName, setUserName] = useState('')
        const [password, setPassword] = useState('')
        const submitHandler = (e)=>{
            e.preventDefault();  
            setEmail('');
            setPassword(''); 
            setUserName('')   
            handleSignUp(userName, email, password)    
        }

    const navigate = useNavigate()
    
    const moveToLogin = () =>{
        navigate('/login') 
    }
 return (
  <div className="min-h-screen w-full flex items-center justify-center bg-[#050505] p-6">

    {/* Neon Border */}
    <div className="relative w-[420px] p-[2px] rounded-2xl bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-600 animate-pulseSlow">

      <div className="bg-[#0a0a0a] rounded-2xl p-8 shadow-2xl">

                <div className="flex items-center justify-center gap-2 mb-6">
          <img
            className="h-12 w-12 drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]"
            src="https://static.vecteezy.com/system/resources/thumbnails/048/719/764/small/heap-of-puzzle-pieces-3d-concept-free-png.png"
            alt=""
          />
          <h1 className="text-5xl font-bold tracking-wider text-white pr-10">
            EMS
          </h1>
        </div>

        {/* Header */}
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-3xl font-bold tracking-wide text-white">
            Create Account
          </h1>
        </div>

        <form onSubmit={submitHandler} className="flex flex-col gap-3">

          {/* Name */}
          <input
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full bg-transparent border border-cyan-400 text-white px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-gray-500"
            type="text"
            placeholder="Enter Name"
          />

          {/* Email */}
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border border-cyan-400 text-white px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-gray-500"
            type="email"
            placeholder="Enter Email"
          />

          {/* Password */}
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent border border-cyan-400 text-white px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-gray-500"
            type="password"
            placeholder="Enter Password"
          />

          {/* Button */}
          <button className="mt-4 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,255,0.6)]">
            Sign Up
          </button>

          {/* Login Link */}
          <p
            onClick={moveToLogin}
            className="text-center text-sm text-gray-400 hover:text-cyan-400 cursor-pointer mt-2"
          >
            Already a user? <span className="underline">Login</span>
          </p>

        </form>
      </div>
    </div>
  </div>
)

}

export default SignUp