
const { SignUp, Post, Cart } = require("../database-mongo/Item.model");

const selectAllPosts = async function (req, res) {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(200).json(error);
  }
};

  const selectAllSignUps = async function (req, res) {
    try {
      const accounts = await SignUp.find({});
      console.log(accounts)
      res.status(200).json(accounts);
    } catch (error) {
      res.status(200).json(error);
    }
  };
  const createAccount = async function(req,res){
    try{

        const createA=await SignUp.create(req.body)
        res.status(201).json(createA)
        
    } catch (err){
        res.json(err)
    }
   
  }
  
  const updateAccount=async function(req,res){
    let updates={}
    if(req.body.firstName){
      updates.firstName=req.body.firstName
    }
    if(req.body.lastName){
      updates.lastName=req.body.lastName
    }
    if(req.body.password){
      updates.password=req.body.password
    }
     
    try{
        const update=await SignUp.findByIdAndUpdate(req.body.userid,updates)
        res.status(200).json(update)
    } catch(err){
        res.json(err)
    }
  }
  const deleteAccount=async function(req,res){
    try{
        const deleteS=await SignUp.findOneAndDelete(req.body)
        res.status(200).json(deleteS)
    } catch(err){
        res.json(err)
    }
  }
  const createPost=async function(req,res){
    try{
      const post=await Post.create(req.body)
      res.status(201).json(post)
    }catch(err){
      res.json(err)
    }
  }
  const updatePost=async function(req,res){
    try{
      const post=await Post.findByIdAndUpdate(req.body.postId,req.body)
        res.status(201).json(post)
      }catch(err){
        res.json(err)
      }
    }
    const deletePost=async function(req,res){
    try{  const post=await Post.findOneAndDelete(req.body)
      res.status(200).json(post)
    }catch(err){
      res.json(err)
    }
    }
    const getOneUser=async function(req,res){
      try{
        user=await SignUp.findOne(req.body)
        res.status(200).json(user)
      }catch(err){res.json(err)} }


module.exports = { selectAllPosts,selectAllSignUps,getOneUser,createAccount,updateAccount,deleteAccount,createPost,updatePost,deletePost };
