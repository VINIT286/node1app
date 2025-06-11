
import User from "../models/user.js"
// import Sub from "../models/sub.js"
function home(req,res){
    const a=50
    res.render("home",{a})
}
function about(req,res){
    const b=[44,55,66,77]
    res.render("about",{b})
}
function contact(req,res){
    const c={
        "name":"vinit gandhe",
        "email":"vinitgandhe10301@gmail.com"
    }
    res.render("contact",{c})
}
function adddata(req,res){
    res.render("adddata")
}
const subdata=async(req,res)=>{
    let name=req.body.name
    let email=req.body.email
    await User.create({name,email})
    res.redirect("/")
}
const getsubdata=async(req,res)=>{
    const show=await User.find()
    // res.json(show)
    res.render("showuser",{show})
}
const deletedata=async (req,res)=>{
    await User.findByIdAndDelete(req.params.id)
    res.redirect("/getsubdata")
}
const updateform=async(req,res)=>{
    let up=await User.findById(req.params.id)
    res.render("update",{up})
}
const update=async(req,res)=>{
    await User.findByIdAndUpdate(req.params.id,req.body)
    res.redirect("/getsubdata")
}

export{home,about,contact,adddata,subdata,getsubdata,deletedata,updateform,update}
