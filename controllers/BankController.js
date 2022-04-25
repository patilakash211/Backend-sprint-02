const express=require("express")
const mongoose=require("mongoose");

const BranchDetails=require("../model/BranchDetail.js")
const FixedAccount=require("../model/FixedAccount.js")
const masteraccount=require("../model/MasterAccount.js")
const SavingsAccount=require("../model/SavingsAccount")



class BankController{
    static masteraccount=async(req,res,next)=>{
        let data=req.body
        let response=await masteraccount.insertMany([data])
        res.send(response)
    }
    static SavingsAccount=async(req,res,next)=>{
        let data=req.body
        let response=await SavingsAccount.insertMany([data])
        res.send(response)
    }
    static FixedAccount=async(req,res,next)=>{
        let data=req.body
        let response=await FixedAccount.insertMany([data])
        res.send(response) 
    }


    static masteraccountid=async(req,res,next)=>
    {
        let id=req.params
        let response=await FixedAccount.find({_id:id})
        res.send(response) 
    }

    static fixedaccountid=async(req,res,next)=>{
        let id=req.params
        let response=await FixedAccount.find({_id:id})
        res.send(response)  
    }
    static maturitytransferid=async(req,res,next)=>{
        let id=req.params
        let response=await FixedAccount.find({_id:id})
        res.send(response) 
    }

    static userRegister=async(req,res,next)=>{
        let data=req.body
        let response=await SavingsAccount.insertMany([data])
        res.send(response)
    }
}
module.exports=BankController;