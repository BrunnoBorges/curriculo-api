const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    const details = {
        name: req.body.name,
        profession: req.body.profession,
        profession_alternative: req.body.profession_alternative,
        description: req.body.description

    }
    res.status(200).send({
        menssagem: 'Usando rota de Home',
        homeDetails: details
    });
});

module.exports = router;