import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';

const app= express();

// To Import Routers
import UserRouter from './routes/user.router.js';
import CategoryRouter from './routes/category.router.js';
import SubCategoryRouter from './routes/subcategory.router.js';


// to allow cross origin request 
app.use(cors());

// To extract the body data from req.(Post,Patch,Put,Delete)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// To extract body file data from req.
app.use(fileUpload());

//Route LEvel middleware
app.use("/user",UserRouter)// here /user is base Url & UserRouter is loaded
app.use("/category", CategoryRouter);
app.use("/subcategory", SubCategoryRouter);

app.listen(3001);
console.log("http://localhost:3001");


/*if /user ( Base Url) of application level matches with route level middleware 
then Request Will carry forward to UserRouter, Then we Will decide what to do with the data of User Url 
We can Save it(Post), Fetch it(GET), Update it(PATCH), Delete it or login it
*/