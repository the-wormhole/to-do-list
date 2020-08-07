const mongoose = require('mongoose');

const to_doschema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    Due_Date: {
        type: String,
        required: true
    }
});

const task = mongoose.model('to_do', to_doschema);

module.exports = task;