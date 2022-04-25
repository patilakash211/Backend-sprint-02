const express = require("express");
const routes=express.Router()
const BankController=require("../controllers/BankController.js")
const UserController=require("../controllers/UserControlles.js")

routes.get("/masteraccount",BankController.masteraccount)
routes.post("/SavingsAccount",BankController.SavingsAccount)
routes.post("/FixedAccount",BankController.FixedAccount)
routes.get("/masteraccount/:id",BankController.masteraccountid)
routes.delete("/fixedaccount/:id",BankController.fixedaccountid)
routes.post("/maturitytransfer/:id",BankController.maturitytransferid)
routes.post("/userRegister",UserController.userRegister)

module.exports=routes