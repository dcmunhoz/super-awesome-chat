const router = require('express').Router();

const UserController = require('./controllers/UserController');

router.get('/', (req, res) => {
    return res.json({biri: true});
});

/** User routes */
router.get('/session', UserController.session);

module.exports = router;