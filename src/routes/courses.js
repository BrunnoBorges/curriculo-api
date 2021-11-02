const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        menssagem: 'Usando rota de Cursos'
    });
});

// router.get('/:id_cursos', (req, res, next) => {
//     const id = req.params.id_cursos;

//     if(id === 'especial') {
//         res.status(200).send({
//             menssagem: 'Vc descobriu o ID especial',
//             id: id
//         });
//     } else {
//         res.status(200).send({
//             menssagem: 'ID comum',
//         });
//     }

// });

module.exports = router;