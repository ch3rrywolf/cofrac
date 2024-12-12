const authModel = require('../models/authModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
class authController {
    login = async (req, res) => {
        const { email, password } = req.body

        if (!email) {
            return res.status(404).json({ message: 'Please provide your email' })
        }
        if (!password) {
            return res.status(404).json({ message: 'Please provide your password' })
        }

        try {
            const user = await authModel.findOne({ email }).select('+password')
            if (user) {
                const match = await bcrypt.compare(password, user.password)
                if (match) {
                    const obj = {
                        id: user.id,
                        name: user.name,
                        operation: user.operation,
                        role: user.role
                    }
                    const token = await jwt.sign(obj, process.env.secret, {
                        expiresIn: process.env.exp_time
                    })
                    return res.status(200).json({ message: 'login success', token })
                    
                } else {
                    return res.status(404).json({ message: 'invalid password' })
                }
            } else {
                return res.status(404).json({ message: 'user not found' })
            }
        } catch (error) {
            console.log(error)
        }

    }

    add_inspecteur = async (req, res) => {

        const { email, name, password, operation } = req.body

        if (!name) {
            return res.status(404).json({ message: 'please provide name' })
        }
        if (!password) {
            return res.status(404).json({ message: 'please provide password' })
        }
        if (!operation) {
            return res.status(404).json({ message: 'please provide operation' })
        }
        if (!email) {
            return res.status(404).json({ message: 'please provide email' })
        }
        if (email && !email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
            return res.status(404).json({ message: 'please provide valide email' })
        }
        try {
            const inspecteur = await authModel.findOne({ email: email.trim() })
            if (inspecteur) {
                return res.status(404).json({ message: 'User alreasy exit' })
            } else {
                const new_inspecteur = await authModel.create({
                    name: name.trim(),
                    email: email.trim(),
                    password: await bcrypt.hash(password.trim(), 10),
                    operation: operation.trim(),
                    role: 'inspecteur'
                })
                return res.status(201).json({ message: 'inspecteur add success', inspecteur: new_inspecteur })
            }
        } catch (error) {
            return res.status(500).json({ message: 'internal server error' })
        }
    }
}

module.exports = new authController()