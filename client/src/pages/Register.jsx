import React from 'react'
import { useState } from 'react'
import axios from "axios"

import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom'

function Register() {

const navigate = useNavigate()

const[data,setData] = useState({
name:"",
email: "",
password:""
})

const registerUser = async (e) => {
e.preventDefault()
const {name,email,password} = data
try {
  const{data} = await axios.post('/register',{
   name,email,password,
   })
   if(data.error){
   toast.error(data.error)
   } else{
   setData({})
   toast.success("Register successful. Welcome!")
   navigate('/login')
   }
} catch (error) {
  console.log(error)
}
}

  return (
  <>
    

     <div className='container'>

    <form onSubmit={registerUser}>
  <div class="form-outline mb-2">
  <label class="form-label" for="name">Name</label>
    <input name='name' type='text' placeholder='name' value={data.name} onChange={(e) => setData({...data,name:e.target.value})} class="form-control" />
    
  </div>
  <div class="form-outline mb-2">
  <label class="form-label" for="email">Email address</label>
    <input name='email' type='email' placeholder='email' value={data.email} onChange={(e) => setData({...data,email:e.target.value})} class="form-control" />
    
  </div>
  <div class="form-outline mb-2">
  <label class="form-label"  >Password</label>
    <input type='password' placeholder='password' value={data.password} onChange={(e) => setData({...data,password:e.target.value})} class="form-control" />
    
  </div>

  <button type="submit" class="btn btn-primary btn-block mb-4">Submit</button>
</form>
    </div>
    </>
  )
}

export default Register