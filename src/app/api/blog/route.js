import { NextResponse } from 'next/server';
const { default: client } = require('@/lib/Utilies');
const db = client.db("NextjsProject1");
const UserCollection = db.collection("user");
export async function POST(request) {
    const {email,names} = await request.json()
    console.log(email,names);
    await UserCollection.insertOne({email,names})
    return NextResponse.json({message: "Topic create"})
}
export async function GET(request){
  const result = await UserCollection.find().toArray()
    return NextResponse.json({result})
}
export async function DELETE(request){
    const {id }= request.nextUrl.searchParams.get("bd")
    const result = await UserCollection.findOneAndDelete({id})
    return NextResponse.json({message:"deleted"})
}
// export async function SingeGET(req){

// }

