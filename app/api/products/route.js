// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectionSrc } from "@/app/lib/db"
import { Product } from "@/app/lib/models/product"
import mongoose from "mongoose"
import { NextResponse } from "next/server"



export async function POST(req, res) {
    const payload = await req.json()
    await mongoose.connect(connectionSrc).then((msg) => console.log("connected"))
    let product = new Product(payload)
    const result = await product.save()

    if(!payload.company || !payload.category || !payload.price || !payload.name){

        return NextResponse.json({ msg: "Please fill the all Fields",success:false },{status:200})
    }else{
        return NextResponse.json({ result: result, msg:"Add Product Successfuly", success: true }, { status: 200 })
    }
}

export async function GET(req, res) {
    let data = []
    await mongoose.connect(connectionSrc).then((msg) => console.log("connected"))
    const result = await Product.find()
    console.log(result)
    return NextResponse.json({ result: result, msg: "get products", success: true }, { status: 200 })
}
