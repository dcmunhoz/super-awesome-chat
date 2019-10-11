const router = require('express').Router();

const UserController = require('./controllers/UserController');

router.get('/', (req, res) => {
    return res.json({biri: true});
});

/** User routes */
router.get('/session', UserController.session);
router.get('/user/:user_id', UserController.index);
router.post('/newContact', UserController.newContact);

module.exports = router;