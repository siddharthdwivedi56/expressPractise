var express = require('express');
var Router = express.Router();
const CourseController = require('../Controllers/CourseController');

Router.get("/courses",CourseController.getAlCourses);
Router.get("/course/:id",CourseController.getCourseById);
module.exports = Router;