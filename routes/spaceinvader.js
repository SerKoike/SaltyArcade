var express = require('express');
var router = express.Router();

/* GET Space Invaders game page. */
router.get('/', function (req, res, next) {
    res.render('spaceinvader'/*in view folder*/, { title: 'SaltyArcade' });
});

module.exports = router;
