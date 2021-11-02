const mongoose = require('mongoose');

const Professional = mongoose.model('Professional', {
    front_end: Array,
    framework_front_end: Array,
    ux_ui_designer: Array,
    ferramentas_ux_ui: Array,
    Conhecimentos_Extras: Array
})

module.exports = Professional;