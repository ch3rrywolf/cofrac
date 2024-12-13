const operationsModel = require('../models/operationsModel')
class operationController {

    add_operations = async (req, res) => {

        const { operationName, limitPres, prixUnit, tVa, dureeInter } = req.body

        if (!operationName) {
            return res.status(404).json({ message: 'please provide operationName' })
        }
        if (!limitPres) {
            return res.status(404).json({ message: 'please provide limitPres' })
        }
        if (!prixUnit) {
            return res.status(404).json({ message: 'please provide prixUnit' })
        }
        if (!tVa) {
            return res.status(404).json({ message: 'please provide tVa' })
        }
        if (!dureeInter) {
            return res.status(404).json({ message: 'please provide dureeInter' })
        }
        try {
            const operation = await operationsModel.findOne({ operationName: operationName.trim() })
            if (operation) {
                return res.status(404).json({ message: 'operation alreasy exit' })
            } else {
                const new_operation = await operationsModel.create({
                    operationName: operationName.trim(),
                    limitPres: limitPres.trim(),
                    prixUnit: prixUnit.trim(),
                    tVa: tVa.trim(),
                    dureeInter: dureeInter.trim()
                })
                return res.status(201).json({ message: 'operation add success', operation: new_operation })
            }
        } catch (error) {
            return res.status(500).json({ message: 'internal server error' })
        }
    }

    get_operations = async (req, res) => {
        try {
            const operations = await operationsModel.find({}).sort({ createdAt: -1 })
            return res.status(200).json({ operations })
        } catch (error) {
            return res.status(500).json({ message: 'internal server error' })
        }
    }
}

module.exports = new operationController()