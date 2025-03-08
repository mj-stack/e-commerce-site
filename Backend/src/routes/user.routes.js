import {Router} from 'express'
import { userController } from '../controllers/user.controller.js';

const userDetailsRouter = Router();

userDetailsRouter.route("api/products").get(userController)

export default userDetailsRouter