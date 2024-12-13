const clientsModel = require('../models/clientsModel')
class clientController {

    add_clients = async (req, res) => {

        const { clientName, clientEmail, clientPhone, clientEmailContact, clientAdresse } = req.body

        if (!clientName) {
            return res.status(404).json({ message: 'please provide clientName' })
        }
        if (!clientEmail) {
            return res.status(404).json({ message: 'please provide clientEmail' })
        }
        if (!clientPhone) {
            return res.status(404).json({ message: 'please provide clientPhone' })
        }
        if (!clientEmailContact) {
            return res.status(404).json({ message: 'please provide clientEmailContact' })
        }
        if (!clientAdresse) {
            return res.status(404).json({ message: 'please provide clientAdresse' })
        }
        try {
            const client = await clientsModel.findOne({ clientName: clientName.trim() })
            if (client) {
                return res.status(404).json({ message: 'client alreasy exit' })
            } else {
                const new_client = await clientsModel.create({
                    clientName: clientName.trim(),
                    clientEmail: clientEmail.trim(),
                    clientPhone: clientPhone.trim(),
                    clientEmailContact: clientEmailContact.trim(),
                    clientAdresse: clientAdresse.trim()
                })
                return res.status(201).json({ message: 'client add success', client: new_client })
            }
        } catch (error) {
            return res.status(500).json({ message: 'internal server error' })
        }
    }

    get_clients = async (req, res) => {
        try {
            const clients = await clientsModel.find({}).sort({ createdAt: -1 })
            return res.status(200).json({ clients })
        } catch (error) {
            return res.status(500).json({ message: 'internal server error' })
        }
    }
}

module.exports = new clientController()