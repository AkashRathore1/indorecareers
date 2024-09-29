import express from 'express';
var router = express.Router();

//to link controller
import * as UserController from '../controller/user.controller.js';

router.post("/save", UserController.save);

router.post("/login", UserController.login);

router.get("/fetch", UserController.fetch);

router.patch("/update", UserController.updateUser);

router.delete("/delete", UserController.deleteUser);

export default router;

/*if /user ( Base Url) of application level matches with route level middleware 
then Request Will carry forward to UserRouter, Then we Will decide what to do with the data of User Url 
We can Save it(Post), Fetch it(GET), Update it(PATCH), Delete it or login it
*/