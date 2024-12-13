const { model, Schema } = require('mongoose')

const clientSchema = new Schema({
    clientName: {
        type: String,
        required: true
    },
    clientEmail: {
        type: String,
        required: true
    },
    clientPhone: {
        type: String,
        required: true
    },
    clientEmailContact: {
        type: String,
        required: true
    },
    clientAdresse: {
        type: String,
        required: true
    },
    clientStatus: {
        type: String,
        default: 'Active'
    },
}, { timestamps: true })

module.exports = model('clients', clientSchema)