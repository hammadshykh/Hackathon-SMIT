import { connectionSrc } from "@/app/lib/db"
import { User } from "@/app/lib/models/users"
import mongoose from "mongoose"
import { NextResponse } from "next/server"


export async function POST(req, res) {

    const data = await req.json()

    await mongoose.connect(connectionSrc).then((msg) => console.log("connected"))
    let checkUser = await User.findOne({ email: data.email })
    console.log(checkUser)

    if(!data.email || !data.password){
        return NextResponse.json({ msg: "Please fill the all Fields",success:false })
    }else{

        if (checkUser !== null) {
            if (checkUser.password == data.password) {
                return NextResponse.json({ msg: "User Login", data: checkUser, success: true }, { status: 200 })
            } else {
                return NextResponse.json({ msg: "password incorrect", success: false }, { status: 200 })
                
            }

        }
    else {
        return NextResponse.json({ msg: "User Not Found", success: false }, { status: 200 })
    }
}

}

export async function GET(req, res) {
    // let checkUser = await User.find()
    return NextResponse.json({ message: "get", data: [], success: true }, { status: 200 })
}



