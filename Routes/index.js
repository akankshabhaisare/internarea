const express=require("express")
const router=express.Router();
const ApplicationRoute=require("./ApplicationRoute")
const intern=require("./internshipRoute")

router.get("/",(req,res)=>{
    res.send("This is backend")
})
router.use('/application',ApplicationRoute);
router.use('/internship',intern)

module.exports=router;