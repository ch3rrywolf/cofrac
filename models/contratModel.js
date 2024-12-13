const { model, Schema } = require('mongoose')

const contratSchema = new Schema({
    contratTitre: {
        type: String,
        required: true
    },
    contratDescription: {
        type: String,
        required: true
    },
    operationName: {
        type: String,
        required: true
    },
    clientName: {
        type: String,
        required: true
    },
    dateContratDeb: {
        type: Date,
        required: true
    },
    dateContratFin: {
        type: Date,
        required: true
    },
    pourcentContrat: {
        type: Number,
        required: true
    },
    contratStatus: {
        type: String,
        default: 'Non Validé'
    },
}, { timestamps: true })

module.exports = model('contrats', contratSchema)