const mongoose = require("mongoose");
const db = require("./index.js");

const SignUpSchema = new mongoose.Schema({
  email: {type:String,
  required:true,
  unique:true},
  password: {type:String,
    required:true},
    firstName:String,
    lastName:String,
    
});
const PostSchema=new mongoose.Schema({
  creater:String,
  firstName:String,
  lastName:String,
  imageUrl:String,
  description:String,
  phoneNumber:Number,
  likes:Number,
  time : Number,
  date: String,
  range:String,
})

// const CartSchema=new mongoose.Schema({
//   buyer:String,
//   itemId:String,
// })



const SignUp=mongoose.model("SignUp",SignUpSchema);
const Post=mongoose.model("Post",PostSchema);
// const Cart=mongoose.model("Cart",CartSchema)

module.exports = {
// Cart,
SignUp,
Post};