const mongoose=require("mongoose")
const JobsSchema=new mongoose.Schema({
    title: String,
    company:String,
    location:String,
    Experience: String,
    category: String,
    aboutCompany:String,
    aboutInternship: String,
    Whocanapply:String,
    perks:Array,
    AdditionalInfo:String,

    CTC: String,
    StartDate:String,
   
    createAt:{
        type:Date,
        default:Date.now,

    },
    

})
module.exports=mongoose.model("Jobs",InternshipSchema)





  
