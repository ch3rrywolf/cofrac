const chantierModel = require('../models/chantierModel')
class chantierController {

    add_chantiers = async (req, res) => {

        const { benefNom, benefPreNom, chantierAdresse, chantierAdresseDO, chantierCodePostal, chantierEmail, chantierNomDO, chantierPhone, chantierSirenDO, chantierVille, clientName, operationName } = req.body

        
        
        if (!chantierAdresse) {
            return res.status(404).json({ message: 'please provide Adresse' })
        }
        if (!chantierCodePostal) {
            return res.status(404).json({ message: 'please provide Code Postal' })
        }
        if (!chantierVille) {
            return res.status(404).json({ message: 'please provide Ville' })
        }
        if (!chantierNomDO) {
            return res.status(404).json({ message: 'please provide Nom Donneur' })
        }
        
        try {
            const chantier = await chantierModel.findOne({ benefNom: benefNom.trim() })
            if (chantier) {
                return res.status(404).json({ message: 'contrat alreasy exit' })
            } else {
                const new_chantier = await chantierModel.create({
                    benefNom: benefNom.trim(),
                    benefPreNom: benefPreNom.trim(),
                    chantierAdresse: chantierAdresse.trim(),
                    clientName: clientName.trim(),
                    chantierAdresseDO: chantierAdresseDO.trim(),
                    chantierCodePostal: chantierCodePostal.trim(),
                    chantierEmail: chantierEmail.trim(),
                    chantierNomDO: chantierNomDO.trim(),
                    chantierPhone: chantierPhone.trim(),
                    chantierSirenDO: chantierSirenDO.trim(),
                    chantierVille: chantierVille.trim(),
                    clientName: clientName.trim(),
                    operationName: operationName.trim(),
                })
                return res.status(201).json({ message: 'chantier add success', chantier: new_chantier })
            }
        } catch (error) {
            return res.status(500).json({ message: 'internal server error' })
        }
    }

    get_chantiers = async (req, res) => {
        try {
            const chantiers = await chantierModel.find({}).sort({ createdAt: -1 })
            return res.status(200).json({ chantiers })
        } catch (error) {
            return res.status(500).json({ message: 'internal server error' })
        }
    }

    get_dashboard_single_chantiers = async(req, res) => {
            const { chantiers_id } = req.params
            try {
                const chantiers = await chantierModel.findById(chantiers_id)
                return res.status(200).json({ chantiers })
            } catch (error) {
                console.log(error.message)
                return res.status(500).json({ message: 'Internal server error' })
            }
        }
}

module.exports = new chantierController()