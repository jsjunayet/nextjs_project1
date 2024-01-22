import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

const { default: client } = require("@/lib/Utilies");

const db = client.db("NextjsProject1");
const UserCollection = db.collection("user");

export async function PUT(request,{params}){
const {id}=params;
console.log(id);
const {names,email}=await request.json()
console.log(names,email);
const doc = {
    $set:{
        names:names,
        email:email
    }
}
const result = await UserCollection.updateOne({_id: new ObjectId(id)}, doc)
return NextResponse.json({message:"succssfully update"},{result})
}

export async function GET(request,{params}){
    const {id} = params;
    const result = await UserCollection.findOne({_id: new ObjectId(id)})
    return NextResponse.json({result:result})
}