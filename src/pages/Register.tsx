import { useAuth0 } from '@auth0/auth0-react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/fiebase/firebaseConfig';
import toast from 'react-hot-toast';

const Register = () => {
  const Navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: async values => {
      if (values.password !== values.confirmPassword) {
        toast.error("Password didn't Match")
        return
      }
      try {
        await createUserWithEmailAndPassword(auth, values.email, values.password);
        toast.success('User Created Successfully')
        setTimeout(() => {
          Navigate('/')
        }, 1000)
      } catch (err) {
        toast.error('Something Went Wrong')
      }
    },
  });
  return (
    <>
      <div className="bg-[#f4f9f9] h-[100vh] flex items-center justify-center">
        <div className="w-[30%] h-[40%] bg-[white] shadow-lg rounded-xl">
          <form onSubmit={formik.handleSubmit} className='flex mt-[5%] flex-col justify-center ml-[10%]'>
            <label className=' text-[gray] text-[18px] mt-[10px]' htmlFor="firstName">Email:</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder='e.g :- Danish'
              className='border-2 p-[5px] bg-[gainsboro] w-[90%] m-[0px]  rounded-md'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label className='text-[gray] text-[18px] mt-[10px] mr-[30%]' htmlFor="email">Password :</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder='**********'
              className='border-2 p-[5px] bg-[gainsboro]  w-[90%] m-[0px] rounded-md'
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <label className='text-[gray] text-[18px] mt-[10px] mr-[30%]' htmlFor="email">Confirm Password :</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder='**********'
              className='border-2 p-[5px] bg-[gainsboro]  w-[90%] m-[0px] rounded-md'
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            <div className='w-[100%] mt-[10px] flex-end'>
              <button
                type="submit"
                className='border-2 p-[5px] bg-[blue] w-[100%] text-white w-[150px] mt-[10px] rounded-md flex-end'
              >SignUp</button>
            </div>
          </form>
        </div >
        <button
          onClick={() => Navigate('/')}
          className='absolute top-0 right-0 m-[15px] p-[7px] rounded-sm text-white bg-[blue]'
        >Login</button>
      </div >
    </>
  )
}

export default Register