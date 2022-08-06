import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Black from '../assets/mudzin.jpg'

export default function Login() {
  return (
    <div className='grid grid-cols-12 mx-auto gap-20'>
        <div className='login__left col-start-2 col-end-7'>
            <div className='login__left__back mt-20 cursor-pointer text-inactive text-lg'><Link to='/' className="hover:text-primary"><FontAwesomeIcon className="pr-2 " icon={faAngleLeft} /> Back</Link></div>
            <div className='login__left__inner flex mt-36 flex-1'>
                <div className='flex-1'>
                <h2 className='text-6xl'>Login</h2>
                <div className='login__left__input__list mt-32'>
                    <label htmlFor='email_address' className='block text-lg'>Email Address</label>
                    <input name='email_address' placeholder='name@email.com' className='border-2 border-solid border-[#ECF0F4] pl-4 w-[500px] py-4 mt-4 rounded focus:outline-primary'/>
                    <label htmlFor='password' className='block text-lg mt-6'>Password</label>
                    <input name='password' placeholder='Password' className='border-2 border-solid border-[#ECF0F4] pl-4 w-[500px] py-4 mt-4 rounded focus:outline-primary'/>
                    <button className='block text-lg w-[500px] mt-8 py-6 text-white bg-primary hover:bg-primary/80 transition rounded'>Login</button>
                    <p className='text-inactive text-lg font-sans mt-8'>Don’t have and account? <Link to="/singup" className='text-primary'>Sign up</Link></p>
                </div>
                </div>
            </div>
        </div>
        <div className='login__right col-start-7 col-end-13'>
            <img src={Black} className="object-cover object-bottom h-screen w-full"/>
        </div>
    </div>
  )
}
