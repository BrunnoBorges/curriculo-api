const express = require('express');
const app = express();
const mongoose = require('mongoose');

const homeRoutes = require('./src/routes/homeRoutes');
const coursesRoutes = require('./src/routes/coursesRoutes');
const experienceRoutes = require('./src/routes/experienceRoutes');
const professionalRoutes = require('./src/routes/professionalRoutes');

app.use('/home', homeRoutes);
app.use('/cursos', coursesRoutes);
app.use('/experiencia', experienceRoutes );
app.use('/profissional', professionalRoutes );


app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

const DB_USER = 'obrunnodiego'
const DB_PASSWORD = encodeURIComponent('original20')
const PORT = process.env.PORT || 3000;


mongoose
.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@curriculoweb.iyzix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
.then(() => {
    console.log('Conectamos ao Mongo')
    app.listen(PORT);
    console.log('PORTA UTILIZADA', PORT);
})
.catch((err) => {
    console.log(err)
})



// module.exports = app;

