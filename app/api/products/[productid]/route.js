import { connectionSrc } from "@/app/lib/db"
import { Product } from "@/app/lib/models/product"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function PUT(req, content) {
  const productId = content.params.productid
  const filter = { _id: productId }
  const data = await req.json()
  console.log(data)
  console.log(filter)

  await mongoose.connect(connectionSrc).then((res) => console.log("Connected"))
  const result = await Product.findOneAndUpdate(filter, data)

  return NextResponse.json({ result: result, success: true })
}


export async function GET(req, content) {
  const productId = content.params.productid
  const filter = { _id: productId }

  console.log(filter)

  await mongoose.connect(connectionSrc).then((res) => console.log("Connected"))
  const result = await Product.findById(filter)

  return NextResponse.json({ result: result, success: true })
}


export async function DELETE(req,content){
  const productId = content.params.productid
  const filter = { _id: productId }
  await mongoose.connect(connectionSrc).then((res) => console.log("Connected"))
  const result = await Product.deleteOne(filter)
  return NextResponse.json({ result: result, success: true })

}