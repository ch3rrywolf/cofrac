const { formidable } = require('formidable')
const cloudinary = require('cloudinary').v2
const inspectionsModel = require('../models/inspectionsModel')
const authModel = require('../models/authModel')
const galleryModel = require('../models/galleryModel')
const {mongo : {ObjectId}} = require('mongoose')
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

    get_images = async (req, res) => {
        const { id } = req.userInfo

        try {
            const images = await galleryModel.find({ inspecteurId: new ObjectId(id) }).sort({ createdAt: -1 })
            return res.status(201).json({ images })
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' })
        }
    }

    add_images = async (req, res) => {

        const form = formidable({})
        const { id } = req.userInfo

        cloudinary.config({
            cloud_name: process.env.cloud_name,
            api_key: process.env.api_key,
            api_secret: process.env.api_secret,
            secure: true
        })

        try {
            const [_, files] = await form.parse(req)
            let allImages = []
            const { images } = files

            for (let i = 0; i < images.length; i++) {
                const { url } = await cloudinary.uploader.upload(images[i].filepath, { folder: 'inspections_images' })
                allImages.push({ inspecteurId: id, url })
            }

            const image = await galleryModel.insertMany(allImages)
            return res.status(201).json({ images: image, message: "images uplaod success" })

        } catch (error) {
            console.log(error.message)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }

    get_dashboard_inspections = async(req,res)=>{
        const { id, role } = req.userInfo
        try {
            if (role === 'admin') {
                const news = await inspectionsModel.find({}).sort({ createdAt: -1 })
                return res.status(200).json({ news })
            } else {
                const news = await inspectionsModel.find({ inspecteurId: new ObjectId(id) }).sort({ createdAt: -1 })
                return res.status(200).json({ news })
            }
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }
}

module.exports = new inspectionsController()