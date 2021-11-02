const router = require('express').Router();
const NewController = require('@controller/index.js');

router.get('/', NewController.home);
router.get('/cursos', NewController.courses);
router.get('/experiencia', NewController.experience);
router.get('/portifolio', NewController.portfolio);
router.get('/profisssional', NewController.professional);
// router.post('/', NewController.createSomeone);
// router.post('/cursos', NewController.createCourses);

module.exports = router;