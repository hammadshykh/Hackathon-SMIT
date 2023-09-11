import { Schema, model, models } from "mongoose"

const productModel = new Schema({
    name: String,
    price: String,
    company: String,
    category: String
})

export const Product = models.Products || model("Products", productModel)