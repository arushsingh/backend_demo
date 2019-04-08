
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const config = require('./db');
const Course = require('./Models/Course');
const CourseRoute = require('./Routes/CourseRoute');

const cors = require('cors');

const PORT = 4000;

mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
});



app.use(bodyParser.json());
app.use(cors({ origin: true }));
app.use('/course', CourseRoute);



app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);
});