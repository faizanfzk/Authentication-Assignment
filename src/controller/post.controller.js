const express=require("express");

const router=express.Router();
const authenticate=require("../middleware/authentication")
const Post=require("../models/post.model");

router.get("",authenticate,async(req,res)=>{
    try {
        const posts=await Post.find().lean().exec();
        return res.status(200).send(posts)
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
})
router.post("",authenticate,async(req,res)=>{
    try {
        const post=await Post.create(req.body);
        return res.status(200).send(post)
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
})
router.get("/:id",authenticate,async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id)
        return res.status(200).send(post)
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
})
router.patch("/:id",authenticate,async(req,res)=>{
    try {
        const posts=await Post.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(200).send(posts)
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
})
router.delete("/:id",authenticate,async(req,res)=>{
    try {
        const posts=await Post.findByIdAndDelete(req.params.id);
        return res.status(200).send(posts)
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
})
module.exports=router;