import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import { type } from 'os';
 
// Connecting MongoDB 
const url = "mongodb://localhost:27017/fileupload";
mongoose.connect(url);

// Define the User Schema and Model
const userSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  email: String,
  password: String,
  role: String,
  status: Number,
  mobile: Number,
  gender: String,
  info: Date,
  isBlocked:{
    type:Boolean,
    default:false
  }
});
const UserSchemaModel = mongoose.model('User', userSchema);

const app = express();    // Initialize Express app
app.use(cors());        // Allow cross-origin requests

// Extract the body data from requests (Post, Patch, Put, Delete)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));                                                                       

// Define the save function for the user controller
const save = async (req, res) => {
  const userList = await UserSchemaModel.find();
  const l = userList.length;
  const _id = l === 0 ? 1 : userList[l - 1]._id + 1;
  let userDetails = req.body;
  userDetails = { ...userDetails, "_id": _id, "role": "user", "status": 0, "info": new Date() };

  try {
    await UserSchemaModel.create(userDetails);
    sendMailAPI(userDetails.email, userDetails.password);
    res.status(201).json({ "status": true });
  } catch (err) {
    res.status(500).json({ "status": false, "error": err.message });
  }
};

// Define a mock function for sendMailAPI (replace with your actual implementation)
const sendMailAPI = (email, password) => {
  console.log(`Sending mail to ${email} with password ${password}`);
};

// Define the login function for the user controller
const login = async (req, res) => {
  var userDetails = req.body;
  userDetails = { ...userDetails, "status": 1 };
  const userList = await UserSchemaModel.find(userDetails);
  const l = userList.length;
  if (l !== 0) {
    const payload = { "subject": userList[0].email };
    const key = rs.generate();
    const token = jwt.sign(payload, key);
    res.status(200).json({ "token": token, "userDetails": userList[0] });
  } else {
    res.status(500).json({ "token": "error" });
  }
};

// Fetch details of users
const fetch = async (req, res) => {
  const condition_object = url.parse(req.url, true).query;
  const userList = await UserSchemaModel.find(condition_object);
  const l = userList.length;
  if (l !== 0) {
    res.status(200).json(userList);
  } else {
    res.status(500).json({ "result": "Server Error" });
  }
};

// Update details of User
const update = async (req, res) => {
  const userDetails = await UserSchemaModel.findOne(req.body.condition_obj);
  if (userDetails) {
    const user = await UserSchemaModel.updateOne(req.body.condition_obj, { $set: req.body.content_obj });
    if (user) {
      res.status(201).json({ "msg": "success" });
    } else {
      res.status(500).json({ error: "Server Error" });
    }
  } else {
    res.status(404).json({ error: "Requested resource not available" });
  }
};

// Controller to delete User
const deleteUser = async (req, res) => {
  const user = await UserSchemaModel.find(req.body);
  if (user.length !== 0) {
    const result = await UserSchemaModel.deleteMany(req.body);
    if (result) {
      res.status(201).json({ "msg": "success" });
    } else {
      res.status(500).json({ error: "Server Error" });
    }
  } else {
    res.status(404).json({ error: "Resource not found" });
  }
};

// Route to block a user
const block = async (req, res) => {
  const { _id } = req.body;

  try {
    // Update isBlocked and status fields
    const updatedUser = await UserSchemaModel.findByIdAndUpdate(
      _id,
      { isBlocked: true, status: 0 },
      { new: true } // This option returns the updated document
    );

    if (updatedUser) {
      res.status(200).json({ message: 'User blocked successfully', user: updatedUser });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error blocking user', error });
  }
};

// Define the router and routes
const router = express.Router();

router.post("/save", save);
router.post("/login", login);
router.get("/fetch", fetch);
router.patch("/update", update);
router.post("/block", block);
router.delete("/delete", deleteUser);

// Route Level middleware
app.use("/user", router);

// Start the server
app.listen(3001, () => {
  console.log("Server is running at http://localhost:3001");
});
