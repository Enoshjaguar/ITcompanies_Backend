
const company = require('../Models/AddCompany')
const Company = require('../Models/AddCompany')
const 
const addnewcompany = async(req,res)=>{
    const {companyname,category,headquarters,ceo} = req.body
    try {
        const newcompany = new Company({companyname,category,headquarters,ceo,
            file:req.file?req.file.filename:null})
        
        const savedcompany = await newcompany.save()
        if(!savedcompany){
            console.log("company not saved")
            return res.status(500).json({message:"company not saved"})
        }
      
        console.log("compnay saved successfully")
        return res.status(201).json({message:"company saved successfully"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"internal server error"})
        
    }
}
const allcompanies = async (req, res) => {
    try {
        const allcompanies = await Company.find();
        
        const formattedcompanies = allcompanies.map(company => ({
            ...company._doc,
            file: company.file ? `https://itcompanies-backend.onrender.com/public/images/${company.file}` : null
        }));

        console.log("All companies fetched successfully", { allcompanies: formattedcompanies });
        return res.status(200).json({ allcompanies: formattedcompanies });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {addnewcompany,allcompanies}