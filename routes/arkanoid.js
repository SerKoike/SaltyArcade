var express = require('express');
var router = express.Router();

/* GET Digger game page. */
router.get('/', function (req, res, next) {
    res.render('arkanoid'/*in view folder*/, { title: 'SaltyArcade' });
});

module.exports = router;
