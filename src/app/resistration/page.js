"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React, {  useState } from 'react';

const Resistration = () => {
    const router = useRouter()
    const[Error, seterror] = useState("")
    const[loading, setloading]=useState(false)
    

    const handleform =async(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const date = Date.now()
        const user = {name,email,password,date}
       try{
        setloading(true)
        const res = await fetch("http://localhost:3000/api/resistration",{
            method:"POST",
            headers:{
             "Content-Type": "application/json",
            },
              body: JSON.stringify(user),
           });
           if(res.ok){
            seterror(await res.json())
           const form = e.target
           form.reset()
           router.push('/login')
           }
       }catch(err){
        console.log(err)
        setloading(false)
       }finally{
        setloading(false)
       }
    }
    return (
        <div>
                <form onSubmit={handleform}>
<div className="max-w-md mx-auto mt-8 p-6 bg-gray-800 rounded-md shadow-md">
  <input
    className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:border-indigo-500"
    type="text"
    name="name"
    placeholder="Your Name"
    required
  />
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
  {
    Error && <p>{Error.message}</p>
  }
  <button disabled={loading}
    className="w-full px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:border-indigo-700"
    type="submit"
  >
    {loading?"summting...":"summit"}
  </button>
  <Link className='mt-1 flex justify-end' href="/login">
        <p>already account</p>
        </Link>
     </div>

           </form>
        </div>
    );
};

export default Resistration;