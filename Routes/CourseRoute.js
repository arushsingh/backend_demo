const express = require('express');
const app = express();
const router = express.Router();

const Course = require('../Models/Course');

router.route('/add').post(function (req, res) {
    const course = new Course(req.body);
    console.log(req.body);
    course.save()
      .then(course => {
      res.status(200).json({'course': 'Course added successfully','data':course});
      })
      .catch(err => {
        console.log(err);
      res.status(400).send("unable to save the course into database");
      });
  });

module.exports = router;
