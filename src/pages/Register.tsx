import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const Navigate = useNavigate()
  return (
    <>
      <div className="bg-[url('https://images.pexels.com/photos/6214383/pexels-photo-6214383.jpeg?auto=compress&cs=tinysrgb&w=800')] background-blur w-[100vw] h-[100vh] flex items-center justify-center">
        <div className="w-[40%] h-[50%] bg-[url('https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] h-[60vh] rounded-xl  overflow-hidden">
          <form onSubmit={formik.handleSubmit} className='flex flex-col ml-[25%]'>
            <label className='mt-[50px] text-[white] text-[18px] mt-[10px] mr-[33%]' htmlFor="firstName">Name :</label>
            <input
              id="userName"
              name="userName"
              type="text"
              placeholder='e.g :- Danish'
              className='border-2 p-[5px] bg-[gainsboro] w-[70%] m-[0px] rounded-sm'
              onChange={formik.handleChange}
              value={formik.values.userName}
            />
            <label className='text-[white] text-[18px] mt-[10px] mr-[30%]' htmlFor="email">Email Address :</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder='test@gmail.com'
              className='border-2 p-[5px] bg-[gainsboro] w-[70%] m-[0px] rounded-sm'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label className='text-[white] text-[18px] mt-[10px] mr-[30%]' htmlFor="email">Password :</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder='test@gmail.com'
              className='border-2 p-[5px] bg-[gainsboro] w-[70%] m-[0px] rounded-sm'
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <label className='text-[white] text-[18px] mt-[10px] mr-[30%]' htmlFor="email">Confirm Password :</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder='test@gmail.com'
              className='border-2 p-[5px] bg-[gainsboro] w-[70%] m-[0px] rounded-sm'
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            <div className=' w-[70%] mt-[10px] flex-end'>
              <button
                type="submit"
                className='border-2 p-[5px] bg-[blue] text-white w-[150px] mt-[10px] rounded-md flex-end'
              >Submit</button>
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