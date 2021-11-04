const mongoose = require('mongoose');

const Midias = mongoose.model('Midias', {
    instagran: String,
    linkedin: String,
    whatsap: String,
    gmail: String,
    github: String
})

module.exports = Midias;