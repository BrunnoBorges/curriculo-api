const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        menssagem: 'Usando rota de Experiencias'
    });
});

module.exports = router;