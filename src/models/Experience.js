const mongoose = require('mongoose');

const Experience = mongoose.model('Experience', {
    bs_serviço_e_tecnologia: Array,
    engesoftware_tecnologia: Array,
    instituto: Array,
    original_app: Array
})

module.exports = Experience;