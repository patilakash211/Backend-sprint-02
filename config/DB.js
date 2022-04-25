const mongoose =require("mongoose")

class DBconnection{
    constructor()
    {
        this.connectDB()
    }

    connectDB(){
        mongoose.connect("mongodb://localhost:27017/StatebankofIndia")
        mongoose.connection.once('open',()=>{
            console.log("Sucessfull");
        })

        mongoose.connection.on('on',()=>{
            console.log("Error");
        })
    }
}
module.exports=DBconnection