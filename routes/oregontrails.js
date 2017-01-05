var express = require('express');
var router = express.Router();

/* GET Oregon Trails game page. */
router.get('/', function (req, res, next) {
    res.render('oregontrails'/*in view folder*/, { title: 'SaltyArcade' });
});

module.exports = router;
