const mongoose = require('mongoose');

const Home = mongoose.model('Home', {
    name: String,
    description: String,
    profession: String,
    professionSecundary: String
})

module.exports = Home;