const express = require('express');
const app = express();
const router = express.Router();

const Course = require('../Models/Course');

router.route('/add').post(function (req, res) {
   const course = new Course(req.body);
    console.log(req.body);
    course.save()
      .then(course => {
      res.status(200).json({
        'error':'true',
        'msg':'Details Submitted Sucessfully Someone will get back to you !'
      });
      })
      .catch(err => {
        console.log(err);
      res.status(400).send({
        'error':'true',
        'msg':'Something Fishy please try again !'
      });
      });
  });

module.exports = router;
