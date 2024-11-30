const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./Routes/ProductRoute')
const app = express();
app.use(express.json());

/** Datababse connection */
const dbUrl = "mongodb+srv://siddharthdwivedi56:CKhkWarlzczxqtfN@cluster0.tt6sv.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(dbUrl).then((con)=>console.log("connected")).catch(err => console.log(err));

/** Adding api url i.e routes */
app.use('/api/product',productRoute);

app.listen(8010,()=> console.log("connected"));