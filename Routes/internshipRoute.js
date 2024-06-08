const express=require("express")
const router=express.Router();
const internship=require("../Model/Internship");
// const interbData=require("../Data//InternshipDatAvl")
router.post("/",async (req,res)=>{
    const internshipData=new internship({
        title: req.body.title,
        company:req.body.company,
        location:req.body.location,
        Duration: req.body.Duration,
        category: req.body.category,
        aboutCompany:req.body.aboutCompany,
        aboutInternship: req.body.aboutInternship,
        Whocanapply:req.body.Whocanapply,
        perks:req.body.perks,
        AdditionalInfo:req.body.AdditionalInfo,
    
        stipend: rwq.body.stipend,
        StartDate:req.body.StartDate,

    })
    await internship.save().then((data)=>{
        res.send(data)
    }).catch((error)=>{
        console.log(error,"not able to post the data")
    })
})
module.exports=router