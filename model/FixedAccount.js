const mongoose=require("mongoose")
const FixedAccount=mongoose.Schema({
    "account_number":{type:String,required:true,unique:true},
    "balance ":{type:String,required:true},
    "interestRate ":{type:String,required:true},
    "startDate ":{type:String,required:true},
    "maturityDate ":{type:String,required:true},
})

FixedAccount.set('timestamps',true)

module.exports=mongoose.model("FixedAccount",FixedAccount)