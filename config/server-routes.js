'use restrict';

const router = require('express').Router();

// Routes
router.get('/', (req, res) => {
    const result = '';
    res.send(result);
});

router.use('/skills', require('../lib/skills'));
router.use('/mails', require('../lib/mails'));

module.exports = router;