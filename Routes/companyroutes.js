const express = require('express')
const router = express.Router()
const upload = require('../middlewares/multerconfig')
const companycontroller = require('../Controllers/companyController')
router.post('/addcompany',upload.single('file'),companycontroller.addnewcompany)
router.get('/allcompanies',companycontroller.allcompanies)
module.exports = router