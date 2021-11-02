const router = require('express').Router()
const Professional = require('../models/Professional');

router.get('/', async (req, res) => {
    try {
      const data = await Professional.find()
      res.status(200).json(data);

    } catch(error) {
        res.status(500).json({error: error})
    }
});

module.exports = router;