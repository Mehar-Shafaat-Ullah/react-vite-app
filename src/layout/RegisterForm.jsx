import axios from 'axios'
import {useState} from "react";

export default function RegisterForm() {
  const [input, setInput] = useState({
    username : '', 
    password : '',
    confirmPassword : '',
    email : '',
    phon : ''
  })

  const hdlChange = e => {
    setInput( prv => ( { ...prv, [e.target.name] : e.target.value } ) )
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      // validation
      if(input.password !== input.confirmPassword) {
        return alert('Please check confirm password')
      }
      const rs = await axios.post('http://localhost:8889/auth/register', input)
      console.log(rs)
      if(rs.status === 200) {
        alert('Register Successful')
      }
    }catch(err) {
      console.log( err.message)
    }

  }

  return (
<div className=" form-container flex justify-center items-center min-h-screen bg-gray-100 ">
  <div className="border rounded p-4 bg-white shadow-md max-w-md">
    <div className='text-xl mb-4 text-center font-bold'>ลงทะเบียน</div>
    <form className="mb-4" onSubmit={hdlSubmit}>
      <label className="form-control mb-2">
        <span className="label-text block mb-1">Username</span>
        <input 
          type="text" 
          placeholder="Username" 
          className="input input-bordered w-full max-w-xs"
          name="username"
          value={input.username}
          onChange={hdlChange}
        />
      </label>

      <label className="form-control mb-2">
        <span className="label-text block mb-1">Email</span>
        <input 
          type="email" 
          placeholder="Email" 
          className="input input-bordered w-full max-w-xs"
          name='email'
          value={input.email}
          onChange={hdlChange} 
        />
      </label>

      <label className="form-control mb-2">
        <span className="label-text block mb-1">Phone</span>
        <input 
          type="text" 
          placeholder="Phone" 
          className="input input-bordered w-full max-w-xs"
          name='phon'
          value={input.phon}
          onChange={hdlChange} 
        />
      </label>

      <label className="form-control mb-2">
        <span className="label-text block mb-1">Password</span>
        <input 
          type="password" 
          placeholder="Password" 
          className="input input-bordered w-full max-w-xs" 
          name='password'
          value={ input.password}
          onChange={hdlChange}
        />
      </label>

      <label className="form-control mb-2">
        <span className="label-text block mb-1">Confirm password</span>
        <input 
          type="password" 
          placeholder="Confirm password" 
          className="input input-bordered w-full max-w-xs"
          name='confirmPassword'
          value={input.confirmPassword}
          onChange={hdlChange} 
        />
      </label>

      <button type="submit" className="btn btn-info w-full">Submit</button>
    </form>
  </div>
</div>

  );
}