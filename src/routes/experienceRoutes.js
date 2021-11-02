const router = require('express').Router()
const Experience = require('../models/Experience');

router.get('/', async (req, res) => {
    try {
      const data = await Experience.find()
      res.status(200).json(data);

    } catch(error) {
        res.status(500).json({error: error})
    }
});


module.exports = router;