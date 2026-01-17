import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e)=>{
        e.preventDefault();  
        handleLogin(email, password)
        setEmail('');
        setPassword('');        
    }
    const navigate = useNavigate()

    const moveToSignUp = ()=>{
        navigate('/signup') 
    }
return (
  <div className="min-h-screen w-full flex items-center justify-center bg-[#050505]">

    {/* Glow Card */}
    <div className="relative w-[420px] p-[2px] rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 ">
      
      <div className="bg-[#0a0a0a] rounded-2xl p-8 shadow-2xl">

        {/* LOGO */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <img
            className="h-12 w-12 drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]"
            src="https://static.vecteezy.com/system/resources/thumbnails/048/719/764/small/heap-of-puzzle-pieces-3d-concept-free-png.png"
            alt=""
          />
          <h1 className="text-5xl font-bold tracking-wider text-white pr-10">
            EMS
          </h1>
        </div>

        <h2 className="text-center text-xl text-cyan-300 mb-8">
          Welcome Back to EMS!
        </h2>

        {/* FORM */}
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-6"
        >

          {/* Email */}
          <div className="relative">
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border border-cyan-400 text-white px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-gray-500"
              type="email"
              placeholder="Enter email"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border border-cyan-400 text-white px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-gray-500"
              type="password"
              placeholder="Enter Password"
            />
          </div>

          {/* Login Button */}
          <button className="mt-4 py-3 cursor-pointer rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,255,0.6)]">
            Login
          </button>

          {/* Signup */}
          <p
            onClick={moveToSignUp}
            className="text-center text-sm text-gray-400 hover:text-cyan-400 cursor-pointer mt-2"
          >
            Don’t have an account? <span className="underline">Sign Up</span>
          </p>

        </form>
      </div>
    </div>
  </div>
)

}

export default Login