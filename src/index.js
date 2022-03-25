const express=require("express");
const app=express();


const userController=require("./controller/user.controller");
const {register,login}=require("./controller/auth.controller")
const postController=require("./controller/post.controller")
app.use(express.json());

app.use("/users",userController);
app.use("/posts",postController)
app.post("/register",register);
app.post("/login",login);

module.exports=app;
