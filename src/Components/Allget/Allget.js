export const userget =async()=>{
    const res = await fetch("http://localhost:3000/api/blog")
    return await res.json()
}