import { useAuth0 } from '@auth0/auth0-react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/fiebase/firebaseConfig';
import toast from 'react-hot-toast';

const Login = () => {
    const Navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async values => {
            console.log(values)
            try {
                const data = await signInWithEmailAndPassword(auth, values.email, values.password);
                const userData = {
                    uid: data.user.uid,  // User ID
                    email: data.user.email,  // User email
                };

                localStorage.setItem('userData', JSON.stringify(userData));
                Navigate('/Home')
            } catch (err) {
                toast.error('Something Went Wrong')
            }
        },
    });

    return (
        <>
            <div className="bg-[#f4f9f9] h-[100vh] flex items-center justify-center">
                <div className="w-[30%] h-[30%] bg-[white] shadow-lg rounded-xl">
                    <form onSubmit={formik.handleSubmit} className='flex mt-[5%] flex-col justify-center ml-[10%]'>
                        <label className='text-[gray] text-[18px] mt-[10px] mr-[30%]' htmlFor="email">Email Address :</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder='test@gmail.com'
                            className='border-2 p-[5px] bg-[gainsboro] w-[90%] m-[0px] rounded-md'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        <label className='text-[gray] text-[18px] mt-[10px] mr-[30%]' htmlFor="email">Password :</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder='*******'
                            className='border-2 p-[5px] bg-[gainsboro] w-[90%] m-[0px] rounded-md'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        <div className='w-[100%] mt-[10px] flex-end'>
                            <button
                                // onClick={() => loginWithRedirect()}
                                type="submit"
                                className='border-2 p-[5px] bg-[blue] w-[100%] text-white w-[150px] mt-[10px] rounded-md flex-end'
                            >Login</button>
                        </div>
                    </form>
                </div >
                <button
                    onClick={() => Navigate('/Register')}
                    className='absolute top-0 right-0 m-[15px] p-[7px] rounded-sm text-white bg-[blue]'
                >SignUp</button>
            </div >
        </>
    )
}

export default Login