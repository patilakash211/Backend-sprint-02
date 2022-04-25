
const mongoose=require("mongoose")
const branchDetails=mongoose.Schema({
    "name":{type:String,required:true},
    "address":{type:String,required:true},
    "IFSC":{type:String,required:true},
    "MICR":{type:String,required:true},
})

branchDetails.set('timestamps',true)

module.exports=mongoose.model("branchDetails",branchDetails)
