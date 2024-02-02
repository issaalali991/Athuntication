import { Router } from "express";
import { getUserById, getUsers, userLogin, userRegister } from "../controllers/user.js";
import { AuthUserLogin, AuthUserRegister } from "../middleware/Auth.js";

const userRouter = Router();  
userRouter.route('/')
  .get(getUsers);
userRouter.route('/register').post(AuthUserRegister,userRegister);
userRouter.route('/login').post(AuthUserLogin,userLogin);

export default userRouter;