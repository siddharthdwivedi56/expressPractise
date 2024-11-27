const mongoose = require('mongoose');
const dbUrl = "mongodb+srv://siddharthdwivedi56:<password>@cluster0.tt6sv.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(dbUrl).then((connection)=> console.log("connected")).catch(err => console.log(err));

// create schema
const coursesSchema = new mongoose.Schema({
    name: String,
    creator: String,
    isPublished: {type: Boolean, required : true},
    Ratings: Number
});

// create Model
const courseModel = mongoose.model('courses',coursesSchema);


/** Storing Data into Database */
async function createCourse(){
   let newCourse = {
        'name': 'C++',
        'creator': "Varun",
        'isPublished': true,
        'Ratings': 4.5
    }
    let course = new courseModel(newCourse);
    await course.save();
}
//createCourse();

async function updateCourse(id){
    let course1 = await courseModel.findById(id);
    //if(!course1) return ;

    course1.name = "Mangoose";
    course1.creator = "Siddharth";
    await course1.save();
}

//updateCourse('6746cf9919b04953caf5140b');


async function deleteCourse(id){
    let course1 = await courseModel.findByIdAndDelete(id);
}
//deleteCourse('6746cf9919b04953caf5140b');
