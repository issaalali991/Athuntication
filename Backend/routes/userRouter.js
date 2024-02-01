import { Router } from "express";
import { getUsers, userRegister } from "../controllers/user.js";
import { userLogin } from "../middleware/Auth.js";

const userRouter = Router();  
userRouter.route('/')
  .get(
    userLogin
    ,getUsers);
userRouter.route('/register').post(userRegister);

export default userRouter;