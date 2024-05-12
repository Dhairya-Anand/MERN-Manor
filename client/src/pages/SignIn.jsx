import React, {useState} from 'react'
import {Link,useNavigate} from "react-router-dom"
import {useDispatch} from 'react-redux';
import {signInStart, signInFailure,signInSuccess} from '../redux/user/userSlice'; 

export default function SignIn(){
  const [formData,setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    dispatch(signInStart());
    const res = await fetch("/api/auth/signin",{
      method:"POST",
      headers:{
        'Content-Type':'application/JSON',
      },
      body: JSON.stringify(formData),
    })
    const data = await res.json();
    dispatch(signInSuccess(data));
    navigate("/");
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type="text" placeholder='email' id='email'
        className='border p-3 rounded-lg' onChange={handleChange}/>
        <input type="text" placeholder='password' id='password'
        className='border p-3 rounded-lg' onChange={handleChange}/>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase
        hover:opacity-95 disabled:opacity-80'>Sign In</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont Have an account</p>
        <Link to='/sign-up'>
          <span className='text-blue-700'>Sign Up</span>
        </Link>
      </div>
    </div>
  )
}
