const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: String,
    creator: String,
    isPublished: {type: Boolean, required: true},
    Rating: Number
});

const Course = mongoose.model("Course",courseSchema);

module.exports = Course;