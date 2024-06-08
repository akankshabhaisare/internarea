const mongoose=require("mongoose")
require('dotenv').config()
DATABASE=process.env.DATABASEURL
const url=DATABASE
// const url=`mongodb+srv://admin:admin@atlascluster.wuznz4g.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster`
module.exports.connect=()=>{
    mongoose.connect(DATABASE,console.log('Database is connected'))
}