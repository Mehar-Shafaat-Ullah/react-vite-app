import axios from 'axios'
import {useState} from "react";
import useAuth from '../hooks/useAuth'
import { FaUserCircle } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { ImWrench } from "react-icons/im";

export default function LoginForm() {

  const navigate = useNavigate()
  const { setUser,} = useAuth()
  const [input, setInput] = useState({
    username : '', 
    password : ''
  })

  const hdlChange = e => {
    setInput( prv => ( { ...prv, [e.target.name] : e.target.value } ) )
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      // validation
      const rs = await axios.post('http://localhost:8889/auth/login', input)
      console.log(rs.data.token)
      localStorage.setItem('token', rs.data.token)
      
      const rs1 = await axios.get('http://localhost:8889/auth/me', {
        headers : { Authorization : `Bearer ${rs.data.token}` }
      })
      // console.log(rs1.data)
      setUser(rs1.data)
      navigate('/home')

      const rse = await axios.post('http://localhost:8889/auth/login', input)
      console.log(rse.data.token)
      localStorage.setItem('token', rse.data.token)
      
      const rs2 = await axios.get('http://localhost:8889/auth/me', {
        headers : { Authorization : `Bearer ${rs.data.token}` }
      })
      // console.log(rs1.data)
      setUser(rs2.data)
      navigate('/home')


      
    }catch(err) {
      console.log( err.message)
    }
  }

  return (
<div className="hero min-h-screen bg-gray-100 flex justify-center items-center">
  <div className="card-container bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
    <form className="card-body p-8 flex flex-col justify-center items-center" onSubmit={hdlSubmit}>
      <div className="flex justify-center items-center mb-6">
      <div className="bg-blue-400 rounded-full h-24 w-24 flex justify-center items-center transform hover:scale-50 transition-transform duration-300">
          <ImWrench className="text-white text-4xl size-12" />
        </div>
      </div>
      <div className="form-control relative mb-4">
        <label className="label">
          <span className="label-text">Username</span>
        </label>
        <div className="relative">
          <input  
            type="username" 
            placeholder="Username" 
            className="input input-bordered pl-12" 
            name="username"
            value={input.username}
            onChange={hdlChange}
          />
          <FaUserCircle className="absolute left-3 top-3 text-blue-400 text-xl" />
        </div>
      </div>
      <div className="form-control relative mb-4">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <div className="relative">
          <input 
            type="password" 
            placeholder="Password" 
            className="input input-bordered pl-12" 
            name='password'
            value={input.password}
            onChange={hdlChange}
          />
          <FaKey className="absolute left-3 top-3 text-blue-400 text-xl" />
        </div>
      </div>
      <div className="form-control">
        <button type="submit" className="btn btn-info w-full">Login</button>
      </div>
    </form>
  </div>
</div>
      );
    }
