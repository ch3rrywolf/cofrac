const { model, Schema } = require('mongoose')

const inspectionsSchema = new Schema({
    inspecteurId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'authors'
    },
    inspecteurName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    operation: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    date: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    },
    count: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

module.exports = model('inspections', inspectionsSchema)