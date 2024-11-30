const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const dbUrl = "mongodb+srv://siddharthdwivedi56:CKhkWarlzczxqtfN@cluster0.tt6sv.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(dbUrl).then((con)=>console.log("connected")).catch(err => console.log(err));

const courseSchema = new mongoose.Schema({
    name: String,
    creator: String,
    isPublished: {type: Boolean, required: true},
    Rating: Number
});

const Course = mongoose.model("Course",courseSchema);

//api to get all courses
app.get("/api/courses",async (req,res)=>{
    let courses = await Course.find();
    res.json(courses);
});


//api to get a specific course
app.get("/api/course/:id",async (req,res)=>{
    const id = req.params.id;
    let course = await Course.findById(id);
    res.json(course);
});

//api to add a course
app.post("/api/course",async (req,res)=>{
    const coursePost = {
        name: req.body.name,
        creator: req.body.creator,
        isPublished: req.body.isPublished,
        Rating: req.body.Rating
    }
    let course = new Course(coursePost);
    await course.save();
    res.json(course);
});

app.listen(3000);