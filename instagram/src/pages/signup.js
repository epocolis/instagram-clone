import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import FirebaseContext from '../context/firebase';

export default function SignUp() {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [error, setError] = useState();

  const isInvalid =
    password === '' ||
    emailAddress === '' ||
    userName === '' ||
    fullName === '';

  const handleSignUp = async (event) => {};

  useEffect(() => {
    document.title = 'Signup - Instagram';
  }, []);
  return (
    <div className="container flex mx-auto max-w-xs items-center h-screen">
      <div className="flex flex-col">
        <div className="flex flex-col items-center bg-white p-4 border mb-4">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="Instagram Logo"
              className="mt-2 w-6/12 mb-4"
            />
          </h1>

          {error && <p className="mb-4 text-xs text-red-500">{error}</p>}
          <form onSubmit={handleSignUp} method="POST">
            <input
              aria-label="Enter your user name"
              type="text"
              placeholder="Username"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              value={userName}
              onChange={({ target }) => setUserName(target.value)}
            />
            <input
              aria-label="Enter your full name"
              type="text"
              placeholder="Full name"
              className="text-sm  text-gray w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
            />
            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email Address"
              className="text-sm  text-gray w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="text-sm  text-gray w-full mr-3 py-5 px-4 h-2 border rounded mb-2 bg-gray-background"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`${isInvalid && 'opacity-50 cursor-not-allowed'}
          bg-blue-500 text-white w-full rounded h-8 font-bold`}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex justify-center pt-10 items-center flex-col w-full bg-white p-4 border">
          <p>
            Have an account?{' '}
            <Link to={ROUTES.LOGIN} className="font-bold">
              Login in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
