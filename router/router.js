import express from "express"
const router=express.Router()
import{home,about,contact,adddata,subdata,getsubdata,deletedata,updateform,update}from "../controller/controller.js"
router.get("/",home)
router.get("/about",about)
router.get("/contact",contact)

router.get("/adddata",adddata)
router.post("/subdata",subdata)

router.get("/getsubdata",getsubdata)

router.post("/showsub/delete/:id",deletedata)

router.get("/showuser/updateform/:id",updateform)
router.post("/showuser/update/:id",update)
// router.get("/",(req,res)=>{
//     res.send("home")
// })
// router.get("/about",(req,res)=>{
//     res.send("about")
// })
// router.get("/contact",(req,res)=>{
//     res.send("contact")
// })
export default router
