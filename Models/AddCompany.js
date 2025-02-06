const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    companyname:{type:String,required:true},
    category:{
        type:[{
            type:String,
            enum:['servicebased','productbased']
        }]
    },
    headquarters:{type:String,required:true},
    ceo:{type:String,required:true},
    file:{type:String,required:true}
})

const company = mongoose.model('company',companySchema)
module.exports = company