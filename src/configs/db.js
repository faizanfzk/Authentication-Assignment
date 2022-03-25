const mongoose=require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb+srv://faizanfzk:faizan123@cluster0.pwi0t.mongodb.net/Authentication?retryWrites=true&w=majority")
}