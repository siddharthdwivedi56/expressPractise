const Course = require('../Models/CourseModel');

exports.getAlCourses = async (req,res)=>{
    let courses = await Course.find();
    res.json(courses);
}

exports.getCourseById = async (req,res)=>{
    const id = req.params.id;
    let course = await Course.findById(id);
    res.json(course);
}