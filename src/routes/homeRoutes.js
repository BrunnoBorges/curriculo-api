const router = require('express').Router()
const Home = require('../models/Home');

router.get('/', async (req, res) => {
    try {
      const person = await Home.find()
      res.status(200).json(person);

    } catch(error) {
        res.status(500).json({error: error})
    }
});

router.post('/', async (req, res) => {

    const { name, description, profession, professionSecundary } = req.body;

    if(!name || !description || !profession || !professionSecundary) {
        res.status(422).json({error: "O Nome e obrigatorio"})
    }

    const person = {
        name, 
        description, 
        profession, 
        professionSecundary
    }

    try {
        await Home.create(person);
        res.status(201).json({message: 'Usuario inserido com sucesso'})
    } catch(error) {
        res.status(500).json({error: error})
    }

})

module.exports = router;