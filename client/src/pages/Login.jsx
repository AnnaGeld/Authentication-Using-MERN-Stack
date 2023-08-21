import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Login() {

const navigate = useNavigate()

const [data,setData] = useState({
email: "",
password:"",
})

const loginUser = async (e) => {
e.preventDefault()

const {email,password} = data

try {
  const {data} = await axios.post('/login',{
  email,
  password
  })
  if(data.error){
  toast.error(data.error)
  }else{
  setData({})
  toast.success("Login successful. Welcome!")
 navigate("/")

  }
} catch (error) {
  
}

}


  return (
  <div className='container'>

    <form onSubmit={loginUser}>
  <div class="form-outline mb-2">
   <label class="form-label" for="password">Email</label>
    <input type='email' name="email" placeholder='Email'value={data.email} onChange={(e) => setData({...data,email:e.target.value})} class="form-control" />
   
  </div>
  <div class="form-outline mb-2">
  <label class="form-label" for="password">Password</label>
    <input  value={data.password} onChange={(e) => setData({...data,password:e.target.value})} placeholder='Password' type="password" class="form-control" />
    
  </div>

  <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
</form>

    </div>
    
  )
}

export default Login