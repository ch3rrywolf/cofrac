const { model, Schema } = require('mongoose')

const operationSchema = new Schema({
    operationName: {
        type: String,
        required: true
    },
    limitPres: {
        type: Number,
        required: true
    },
    prixUnit: {
        type: Number,
        required: true
    },
    tVa: {
        type: Number,
        required: true
    },
    dureeInter: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = model('operations', operationSchema)