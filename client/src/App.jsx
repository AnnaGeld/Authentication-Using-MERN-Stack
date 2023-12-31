import './App.css'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from "./pages/Register"
import axios from 'axios'
import {Toaster} from "react-hot-toast"



axios.defaults.baseURL = "authentication-using-mern-api.vercel.app"
axios.defaults.withCredentials = true

function App() {
  

  return (
    <>
      <Navbar/>
      <Toaster position='top-right' toastOptions={{duration:2000}} />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      
      </Routes>
      </>
       
    
  )
}

export default App
