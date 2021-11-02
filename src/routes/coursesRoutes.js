const router = require('express').Router()
const Course = require('../models/Course');

router.get('/', async (req, res) => {
    try {
      const data = await Course.find()
      res.status(200).json(data);

    } catch(error) {
        res.status(500).json({error: error})
    }
});


module.exports = router;