const mongoose=require("mongoose")


const userModel=mongoose.Schema({
    "firstName":{type:String,required:true},
    "middleName":{type:String},
    "lastName":{type:String,required:true},
    "age":{type:String,required:true},
    "address":{type:String,required:true},
    "gender":{type:String,default:"female"},
    "type":{type:String,default:"customer"},
})

userModel.set('timestamps',true)

module.exports=mongoose.model("User",userModel)

