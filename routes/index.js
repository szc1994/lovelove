var express = require('express');
var router = express.Router();
const port = require('../dbconfig/config');
const connection = require('../dbconfig/connect');
/* GET home page. */
router.get('/index', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/', (req, res) => {
//   connection.query('select * from love', (err, resp) => {
//     if (err) {
//       res.render('error !!!', err);
//     } else {
//       console.log('成功！');
//       res.render(resp);
//     }
//   });
// });
// router.listen(port, () => {
//   console.log('exanple app listening!');
// });

module.exports = router;
