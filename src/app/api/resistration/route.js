import client from "@/lib/Utilies";
import { NextResponse } from "next/server";

const db = client.db("NextjsProject1");
const ResistraionCollection = db.collection("Resistration")
export async function POST(req){
    try{
        const {name, email, password, date}= await req.json();
        const exists =await ResistraionCollection.findOne({email:email})
        if(exists){
            return NextResponse.json({message:"This email resistrated"})
        }
        else{
            const result = await ResistraionCollection.insertOne({name, email, password, date});
            return NextResponse.json({message:"successfull resistration"})
        }
    }catch(err){
        return NextResponse.json({message:"failed resistration"})
    }
}