import React from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'

export const Login = (props) => {

  const setISLoggedIn = props.setISLoggedIn;
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("YouTuber");
  const [showPassword, setShowPassword] = useState (false);
  const [formData,setFormData] = useState({
    email: "",
    password: ""
  });
  function changeHandler(event){
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      }
    })
  }
  function submitHandler (event){
    event.preventDefault();
    checkEmployee(formData);
  }

  const checkEmployee=async(data)=>{
    await fetch(
      `${process.env.REACT_APP_BASE_URL}/login`,

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      }
     ).then((res)=>{
      return res.json();
     }).then((data)=>{
      console.log(data);
      console.log(data.existUser.accountType);
      if(data.success){
      toast.success(data.message);
      setISLoggedIn(true);
      data.existUser.accountType==="YouTuber"? navigate("/dashboard"): navigate("/editorDashboard");
      }
      else{
        toast.error(data.message);
      }
     })
  }

  return (
    <div className='flex justify-center w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 mt-[200px]'>

      <form onSubmit={submitHandler} className='w-[400px]'>
        <div className='flex justify-between gap-2 flex-col'>
        <label className='w-full flex flex-col items-start relative mt-1'>
          <p className='text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2'>Email Address <span className='text-red-500'>*</span></p>
          <input 
          type= "email"
          required
          value = {formData.email}
          placeholder='Enter your Email'
          onChange={changeHandler}
          name="email"
          className='bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200'></input>
        </label>
        <label className='relative w-full '>
          <p className='my-[10px]'>Password</p>
          <input 
          type={showPassword ? "text" : "password"}
          required
          value = {formData.password}
          placeholder='Enter your password'
          onChange={changeHandler}
          name= "password"
          className='bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200'></input>
          <span onClick={()=> setShowPassword(!showPassword) } className='absolute bottom-[12px] right-3 hover:cursor-pointer ml-[10px]'>
            {showPassword? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
          </span>
        </label>
        <div className='my-[10px] flex w-full text-blue-400 justify-end'>
          <Link to="#" className='text-xs'>
            Forgot Password?
          </Link>
        </div>
        <div className='mt-[30px] flex justify-center'><p>Don't have an account? No worries <Link to='/signup' className='text-blue-400'>Register here</Link></p></div>
        <button className='mb-[25px] bg-yellow-400 w-full text-black p-[3px] rounded-md text-lg'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login;