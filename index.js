const express = require('express');
const app = express();

app.use(middleware);
app.use(logger);
// converting request body from string to json 
app.use(express.json());

// returning text in resposne 
app.get("/",(req,res)=>{
  res.send("Home Page</");
});

// returning html in resposne 
app.get('/about',(req,res)=>{
  res.send("<h1>About</h1>");
});

app.get('/contact',(req,res)=>{
  res.send("<h1>Contact us</h1>");
});


// returning JSON in resposne
let courses = [
  {id:1,name:"java",price:5999.50},
  {id:2,name:"C++",price:4999.50},
  {id:3,name:"php",price:3999.50}
]
app.get('/courses',(req,res)=>{
  res.json(courses);
});


// returning json after filtering id 
app.get("/courses/:id",(req,res)=>{
  let singleCourse = courses.filter((cor)=>{
    return cor.id === parseInt(req.params.id) 
  });
  res.json(singleCourse);
});


app.post('/courses',(req,res)=>{
   //console.log(req.body);
   let newcourses =  JSON.parse(JSON.stringify(courses));
  // newcourses = courses;
   newcourses.push(
    { 
      id:courses.length+1,
      name:req.body.name,
      price:req.body.price,
    })

   res.json(newcourses);
})


app.put('/course/:id',(req,res)=>{

  //res.json(req.params.id);
  let newcourses =  JSON.parse(JSON.stringify(courses));
 // newcourses = courses;
  let singleCourse = newcourses.find((course)=>{
    return course.id === +req.params.id
  });

  // if(!singleCourse){
  //   res.status(404).send("course not found");
  // }

  singleCourse.name = req.body.name;
  singleCourse.price = req.body.price;
  //console.log(process.memoryUsage());
  res.json(newcourses);

});

function middleware(req,res,next){
  console.log("hi");
  next();
}

function logger(req,res,next){
  console.log(req.method,req.ip,req.hostname,new Date());
}

app.listen(3000);
