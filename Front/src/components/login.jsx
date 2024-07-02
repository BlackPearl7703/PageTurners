import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form"

export default function login() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {

    console.log(data)
  }
  return (
    <div >
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-slate-300 text-black dark:bg-slate-900 dark:text-white">
    <form method="dialog " id='login-form'
    onSubmit={
      handleSubmit(onSubmit)}
    >
      {/* if there is a button in form, it will close the modal */}
      <Link to={'/course'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-lg">Login!</h3>
  <div className='space-y-4 mt-5'>
    <div className=''>
    <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email"
    {...register("email", { required: true })}  />
</label>
   
     {errors.email && <span  className='text-xs text-red-500 mt-5'>*This field is required</span>}
</div>
<div>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" className="grow text-black bg-white dark:text-white" placeholder='password'
  {...register("password", { required: true })} 
  />
</label>
 
    {errors.password && <span className=' text-xs text-red-500'>This field is required</span>}

</div>
    </div>

    <div className='flex justify-around mt-8 items-center'>
        <button className='btn btn-success' id='login-form' >Login</button>
        <p>Not registered? 
           <Link to={'/signup'}>   <span className='underline cursor-pointer text-blue-500'>SignUp</span> </Link>  </p>
        </div>  
        </form>


  </div>
</dialog>
    </div>
  )
}
