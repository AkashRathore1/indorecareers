import mongoose from 'mongoose';
const url = "mongodb://localhost:27017/stackbatch930-4apr";
mongoose.connect(url);
console.log("Successfully connected to mongodb database...");

//npm install mongoose@6.8.2