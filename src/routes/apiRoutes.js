const router = require('express').Router();

router.use('/autor', require('./api/autor.routes'));
router.use('/post', require('./api/post.routes'));

module.exports = router;
