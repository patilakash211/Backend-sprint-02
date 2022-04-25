const mongoose=require("mongoose")
const MasterAccount=mongoose.Schema({
    "balance ":{type:String,required:true}
})

MasterAccount.set('timestamps',true)

module.exports=mongoose.model("MasterAccount",MasterAccount)