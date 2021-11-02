const mongoose = require('mongoose');

const { Schema } = mongoose;

const homeSchema = new Schema({
    name: String,
    description: String,
    profession: String,
    professionSecundary: String
})

module.exports = mongoose.model('home', homeSchema);