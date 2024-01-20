"use client"

import { userget } from "@/Components/Allget/Allget";
import { useState } from "react";

const Blog =() => {
  const[loading,setloading]=useState(false)
  const [email,setemail]= useState("")
  const [names,setnames]= useState("")
 const formhanlde = async(e)=>{
  e.preventDefault()
  const user = {email,names}
  setloading(true)
  console.log(user);
 try{
  const res = await fetch("http://localhost:3000/api/blog",{
    method:"POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  setemail("")
  setnames("")
 console.log(await res.json());
 }
 catch(err){
  console.log(err);
 }
 finally{
  setloading(false)
  
 }
 }
  
 const fetchData = async () => {
  const user = await userget();
  console.log(user);
};

fetchData();
  return (
    <div>
      <p>This is the Blog</p>
      <form onSubmit={formhanlde}>
        <input className='bg-black text-white mx-5' type='email' name='email' onChange={(e)=>setemail(e.target.value)} />
        <input className='bg-black text-white mx-5' type='text' name='name' onChange={(e)=>setnames(e.target.value)} />
      <button disabled={loading} className='bg-black text-white px-4 py-2 rounded' type='submit'>{loading?"Loding...":"summit"}</button>
      </form>
    </div>
  );
};

export default Blog;
