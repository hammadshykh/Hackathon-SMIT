import { Schema, model, models } from "mongoose";

let userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    number: String
})


// if (models["Users"]) {
//     delete model['Users']
// }

export const User = models.Users || model("Users", userSchema)