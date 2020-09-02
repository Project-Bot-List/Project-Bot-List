const router = require('express').Router();
const passport = require('passport');

router.get('/login', passport.authenticate('discord'));
router.get('/login/redirect', passport.authenticate('discord'), (req, res) => {
    res.redirect('../../');
});

module.exports = router;