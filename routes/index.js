var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next)
{
    res.render('index'/*in view folder*/, { title: 'SaltyArcade' });
});

module.exports = router;
