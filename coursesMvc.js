const express = require('express');
const mongoose = require('mongoose');
const CourseRoute = require('./Routes/CourseRoute')
const app = express();
app.use(express.json());
app.use('/api',CourseRoute);

const dbUrl = "mongodb+srv://siddharthdwivedi56:<password>@cluster0.tt6sv.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(dbUrl).then((con)=>console.log("connected")).catch(err => console.log(err));
app.listen(3000);