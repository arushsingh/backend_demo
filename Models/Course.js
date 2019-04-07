const mongoose = require('mongoose');

const Schema = mongoose.Schema;


//define the collection  and schema for the course

var Course = new Schema({
    course_name: {
      type: String
    },
    course_price: {
      type: Number
    }
  },{
      collection: 'courses'
  });


  module.exports = mongoose.model('Course',Course);