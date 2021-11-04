const router = require('express').Router()
const Midias = require('../models/Midias');

router.get('/', async (req, res) => {
    try {
        const data = await Midias.find()
        res.status(200).json(data);
        console.log('--->', data);

    } catch(error) {
        res.status(500).json({error: error})
    }
});

router.post('/', async (req, res) => {

    const { instagran, linkedin, whatsap, gmail, github } = req.body;

    if(!instagran || linkedin || whatsap || gmail || github) {
        res.status(422).json({error: "O Nome e obrigatorio"})
    }

    const midias = {
        instagran, linkedin, whatsap, gmail, github
    }

    try {
        await Midias.create(midias);
        res.status(201).json({message: 'Midias Inseridas'})
    } catch(error) {
        res.status(500).json({error: error})
    }

})


module.exports = router;
