import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const JobSchema = mongoose.Schema({
  _id: Number,
  title: {
    type: String,
    required: [true, "Title is required"],
    lowercase: true,
    trim: true,
  },
  catnm: {
    type: String,
    required: [true, "Category name is required"],
    lowercase: true,
    trim: true,
  },
  subcatnm: {
    type: String,
    required: [true, "SubCategory name is required"],
    lowercase: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    lowercase: true,
    trim: true,
  },
  exp: {
    type: String,
    required: [true, "Expirence is required"],
    lowercase: true,
    trim: true,
  },
  salary: {
    type: String,
    required: [true, "Salary is required"],
    lowercase: true,
    trim: true,
  },
  info: String

});

// Apply the uniqueValidator plugin to UserSchema.
JobSchema.plugin(uniqueValidator);

// compile schema to model
const JobSchemaModel = mongoose.model('job_collection', JobSchema);

export default JobSchemaModel