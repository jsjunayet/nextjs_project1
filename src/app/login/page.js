"use client"
import Link from 'next/link';
// import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Login = () => {
    // const route = useRouter()
    const[Error, seterror] = useState('')
    const handleform =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = {email,password}
    }
    return (
        <div>
            <h1>Login</h1>
             <form>
<div className="max-w-md mx-auto mt-8 p-6 bg-gray-800 rounded-md shadow-md">

  <input
    className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:border-indigo-500"
    type="email"
    name="email"
    placeholder="Your Email"
    required
  />
  <input
    className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:border-indigo-500"
    type="password"
    name="password"
    placeholder="Your Password"
    required
  />
  <button
    className="w-full px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:border-indigo-700"
    type="submit"
  >
    Submit
  </button>
   <Link className='mt-1 flex justify-end' href="/resistration">
        <p>Register here</p>
        </Link>
</div>

           </form>
        </div>
    );
};

export default Login;