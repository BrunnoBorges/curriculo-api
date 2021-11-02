const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const rotaHome = require('./routes/home');
const rotaExperience = require('./routes/experience');
const rotaPortfolio = require('./routes/portfolio');
const rotaProfessional = require('./routes/professional');
const rotaCursos = require('./routes/courses');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control_allow-Origin', '*');
    res.header(
        'Access-Control_allow-Header', 
        'Origin, X-Requested-with, Content-Type, Accept, Authorization'
    );

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST')
    }

    next();
})

app.use('/home', rotaHome);
app.use('/experiencia', rotaExperience);
app.use('/portifolio', rotaPortfolio);
app.use('/profissional', rotaProfessional);
app.use('/cursos', rotaCursos);

app.use((req, res, next) => {
    const erro = new Error('Página não encontrtada');
    erro.status = 404 ;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);

    return res.send({
        erro: {
            menssagem: error.message
        }
    })
})


module.exports = app;