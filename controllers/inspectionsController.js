const { formidable } = require('formidable')
const cloudinary = require('cloudinary').v2
const inspectionsModel = require('../models/inspectionsModel')
const authModel = require('../models/authModel')
const moment = require('moment')

class inspectionsController{
    add_inspections = async(req, res) => {
        const {id,operation,name} = req.userInfo
        const form = formidable({})
        cloudinary.config({
            cloud_name : process.env.cloud_name,
            api_key : process.env.api_key,
            api_secret : process.env.api_secret,
            secure : true
        })

        try {
            const [fields, files] = await form.parse(req)
            const {url} = await cloudinary.uploader.upload(files.image[0].filepath, { folder: 'inspections_images' })
            const {title, description} = fields
            const inspections = await inspectionsModel.create({
                inspecteurId: id,
                title: title[0].trim(),
                slug: title[0].trim().split(' ').join('-'),
                operation,
                description : description[0],
                date : moment().format('LL'),
                inspecteurName: name,
                image : url
            })
            return res.status(201).json({message : 'inspection add  success', inspections })
        } catch (error) {
            return res.status(500).json({message : 'Internal server error'})
        }
    }
}

module.exports = new inspectionsController()