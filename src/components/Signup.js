import React from 'react';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import image from '../assets/babka.jpg';
import google from '../assets/Google.svg';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
} from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

export default function Signup() {
  const mail_regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const password_regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const password = useRef({});
  password.current = watch('password', '');
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(auth, data.email_address, data.password)
      .then(() => {
        navigate('/dashboard', { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const handleGoogle = () => {
    signInWithRedirect(auth, provider);

    // signInWithPopup(auth, provider)
    // .then((result) => {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential.accessToken;
    //     // The signed-in user info.
    //     const user = result.user;
    //     // ...
    // }).catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.customData.email;
    //     // The AuthCredential type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error);
    //     // ...
    //   });
  };
  return (
    <div className="grid grid-cols-12 mx-auto gap-20">
      <div className="signup__left col-start-2 col-end-7">
        <div className="signup__left__back mt-20 cursor-pointer text-inactive text-lg">
          <Link to="/" className="hover:text-primary">
            <FontAwesomeIcon className="pr-2 " icon={faAngleLeft} /> Back
          </Link>
        </div>
        <div className="signup__left__inner flex mt-20 flex-1">
          <div className="flex-1">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-6xl">Sign up</h2>
              <div className="signup__left__input__list mt-20">
                <label htmlFor="email_address" className="block text-lg">
                  Email Address
                </label>
                <input
                  {...register('email_address', {
                    required: 'Please enter your email.  ',
                    pattern: {
                      value: mail_regex,
                      message: 'Please enter valid email address.',
                    },
                  })}
                  placeholder="name@email.com"
                  className="border-2 border-solid border-[#DFE5EC] pl-4 w-[500px] py-4 mt-4 rounded focus:outline-primary"
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
                    pattern: {
                      value: password_regex,
                      message: 'Password is to weak.',
                    },
                  })}
                  placeholder="Password"
                  className="border-2 border-solid border-[#DFE5EC] pl-4 w-[500px] py-4 mt-4 rounded focus:outline-primary"
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
                <label htmlFor="re_password" className="block text-lg mt-6">
                  Confirm Password
                </label>
                <input
                  type="password"
                  {...register('re_password', {
                    validate: (value) =>
                      value === password.current || 'Passwords do not match.',
                  })}
                  placeholder="Password"
                  className="border-2 border-solid border-[#DFE5EC] pl-4 w-[500px] py-4 mt-4 rounded focus:outline-primary"
                />
                <ErrorMessage
                  errors={errors}
                  name="re_password"
                  render={({ message }) => (
                    <div className="flex align-center mt-2">
                      <span className="ml-1 font-medium tracking-[.2px]">
                        {message}
                      </span>
                    </div>
                  )}
                />
                <button className="block text-lg w-[500px] mt-8 py-6 text-white bg-primary hover:bg-primary/80 transition rounded">
                  Sign up
                </button>
                <p className="text-inactive text-lg font-sans mt-6">
                  Already have an account?{' '}
                  <Link to="/login" className="text-primary">
                    Log in
                  </Link>
                </p>
              </div>
            </form>
            <div class="relative flex py-5 items-center w-[500px] mt-2">
              <div class="flex-grow border-t border-gray-400"></div>
              <span class="flex-shrink mx-4 text-gray-400">or</span>
              <div class="flex-grow border-t border-gray-400"></div>
            </div>
            <button
              className="flex justify-center block text-lg w-[500px] mt-8 py-6 text-inactive bg-white border-2 border-solid border-[#DFE5EC] transition rounded"
              onClick={handleGoogle}
            >
              <img src={google} className="w-[27px] mr-[15px]" /> Sign in with
              Google
            </button>
          </div>
        </div>
      </div>
      <div className="signup__right col-start-7 col-end-13">
        <img
          src={image}
          className="object-cover object-bottom h-screen w-full"
        />
      </div>
    </div>
  );
}
