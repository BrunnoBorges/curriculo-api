const mongoose = require('mongoose');

const Course = mongoose.model('Course', {
    formacao: Array,
    cursosUx: Array,
    cursosDesenv: Array,
    moreCurses: Object,
    graduacao: Object
})

module.exports = Course;