import { connectionSrc } from "@/app/lib/db"
import { User } from "@/app/lib/models/users"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function PUT(req, content) {
  const userId = content.params.usersid
  const filter = { _id: userId }
  const data = await req.json()
  console.log(data)
  console.log(filter)

  await mongoose.connect(connectionSrc).then((res) => console.log("Connected"))
  const result = await User.findOneAndUpdate(filter, data)

  return NextResponse.json({ result: result, success: true })
}


export async function GET(req, content) {
  const userId = content.params.usersid
  const filter = { _id: userId }

  console.log(filter)

  await mongoose.connect(connectionSrc).then((res) => console.log("Connected"))
  const result = await User.findById(filter)

  return NextResponse.json({ result: result, success: true })
}