var express = require('express');
var router = express.Router();

/* GET wolfenstein game page. */
router.get('/', function (req, res, next) {
    res.render('wolfenstein'/*in view folder*/, { title: 'SaltyArcade' });
});

module.exports = router;
