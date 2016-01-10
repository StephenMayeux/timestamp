var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Timestamp Microservice' });
});

router.get('/:time', function(req, res, next) {
  var time = new Date(req.params.time * 1000),
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    month = months[time.getMonth()],
    date = time.getDate(),
    year = time.getFullYear(),
    naturalDate = month + ' ' + date + ', ' + year,
    data = {
      unix: req.params.time,
      natural: naturalDate
    };
    console.log(month + ' ' + date + ', ' + year);
  res.json(data);
});

module.exports = router;
