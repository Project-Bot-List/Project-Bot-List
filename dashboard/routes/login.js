const router = require('express').Router();
const passport = require('passport');

router.get('/', passport.authenticate('discord'));
router.get('/redirect', passport.authenticate('discord'), (req, res) => {
    res.redirect(req.session.backURL);
});

module.exports = router;