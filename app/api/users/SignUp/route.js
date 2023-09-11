import { connectionSrc } from "@/app/lib/db"
import { User } from "@/app/lib/models/users"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function POST(req, res) {


    const data = await req.json()
    
    await mongoose.connect(connectionSrc).then((msg) => console.log("connected"))
    let checkUser = await User.findOne({ email: data.email })
    console.log(checkUser)

    if (checkUser !== null) {
        return NextResponse.json({ msg: "Already Rejister", success: false })

    } else {
        if(!data.email || !data.password || !data.number || !data.name){
            return NextResponse.json({ msg: "Please fill the all Fields",success:false })

        }else{
            let users = User(data)
            const result = await users.save()
            return NextResponse.json({ msg: "User Rejister", result: result, success:true })
        }
    }
}


export async function GET() {
    await mongoose.connect(connectionSrc).then((msg) => console.log("connected"))
    const data = await User.find()
    return NextResponse.json({
        result: data,
        message: "get data"
    })
}