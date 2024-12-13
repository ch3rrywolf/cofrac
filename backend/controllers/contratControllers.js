const contratModel = require('../models/contratModel')
class contratController {

    add_contrats = async (req, res) => {

        const { contratTitre, contratDescription, operationName, clientName, dateContratDeb, dateContratFin, pourcentContrat } = req.body

        if (!contratTitre) {
            return res.status(404).json({ message: 'please provide contratTitre' })
        }
        if (!contratDescription) {
            return res.status(404).json({ message: 'please provide contratDescription' })
        }
        if (!operationName) {
            return res.status(404).json({ message: 'please provide operationName' })
        }
        if (!clientName) {
            return res.status(404).json({ message: 'please provide clientName' })
        }
        if (!dateContratDeb) {
            return res.status(404).json({ message: 'please provide dateContratDeb' })
        }
        if (!dateContratFin) {
            return res.status(404).json({ message: 'please provide dateContratFin' })
        }
        if (!pourcentContrat) {
            return res.status(404).json({ message: 'please provide pourcentContrat' })
        }
        try {
            const contrat = await contratModel.findOne({ contratTitre: contratTitre.trim() })
            if (contrat) {
                return res.status(404).json({ message: 'contrat alreasy exit' })
            } else {
                const new_contrat = await contratModel.create({
                    contratTitre: contratTitre.trim(),
                    contratDescription: contratDescription.trim(),
                    operationName: operationName.trim(),
                    clientName: clientName.trim(),
                    dateContratDeb: dateContratDeb.trim(),
                    dateContratFin: dateContratFin.trim(),
                    pourcentContrat: pourcentContrat.trim()
                })
                return res.status(201).json({ message: 'contrat add success', contrat: new_contrat })
            }
        } catch (error) {
            return res.status(500).json({ message: 'internal server error' })
        }
    }

    get_contrats = async (req, res) => {
        try {
            const contrats = await contratModel.find({}).sort({ createdAt: -1 })
            return res.status(200).json({ contrats })
        } catch (error) {
            return res.status(500).json({ message: 'internal server error' })
        }
    }
}

module.exports = new contratController()