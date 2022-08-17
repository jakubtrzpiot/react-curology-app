import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import image from '../assets/mudzin.jpg';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

export default function Login() {
  const mail_regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(auth, data.email_address, data.password)
      .then(() => {
        navigate('/dashboard', { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="grid grid-cols-12 mx-auto gap-20 -mt-[120px]">
      <div className="login__left col-start-2 col-end-7">
        <div className="login__left__back mt-20 cursor-pointer text-inactive text-lg">
          <Link to="/" className="hover:text-primary">
            <FontAwesomeIcon className="pr-2 " icon={faAngleLeft} /> Back
          </Link>
        </div>
        <div className="login__left__inner flex mt-36 flex-1">
          <form className="flex-1" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-6xl">Log in</h2>
            <div className="login__left__input__list mt-32">
              <label htmlFor="email_address" className="block text-lg">
                Email Address
              </label>
              <input
                {...register('email_address', {
                  required: 'Please enter your email.',
                  pattern: {
                    value: mail_regex,
                    message: 'Please enter valid email address.',
                  },
                })}
                placeholder="name@email.com"
                className="border-2 border-solid border-[#ECF0F4] pl-4 w-[500px] py-4 mt-4 rounded focus:outline-primary"
              />
              <ErrorMessage
                errors={errors}
                name="email_address"
                render={({ message }) => (
                  <div className="flex align-center mt-2">
                    <span className="ml-1 font-medium tracking-[.2px]">
                      {message}
                    </span>
                  </div>
                )}
              />
              <label htmlFor="password" className="block text-lg mt-6">
                Password
              </label>
              <input
                type="password"
                {...register('password', {
                  required: 'Please enter your password.',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters.',
                  },
                })}
                placeholder="Password"
                className="border-2 border-solid border-[#ECF0F4] pl-4 w-[500px] py-4 mt-4 rounded focus:outline-primary"
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <div className="flex align-center mt-2">
                    <span className="ml-1 font-medium tracking-[.2px]">
                      {message}
                    </span>
                  </div>
                )}
              />

              <button className="block text-lg w-[500px] mt-8 py-6 text-white bg-primary hover:bg-primary/80 transition rounded">
                Log in
              </button>
              <p className="text-inactive text-lg font-sans mt-8">
                Don’t have an account yet?{' '}
                <Link to="/signup" className="text-primary">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="login__right col-start-7 col-end-13">
        <img
          alt=""
          src={image}
          className="object-cover object-bottom h-screen w-full"
        />
      </div>
    </div>
  );
}
