const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        menssagem: 'Usando rota de Home'
    });
});

module.exports = router;