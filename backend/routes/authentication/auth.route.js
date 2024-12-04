import express from 'express';
import { getUser, logInUser, logoutUser, registerUser } from '../../controllers/authentication/auth.controller.js';
import { VerifyJWTAndCookies } from '../../utility/generateJwtAndCookies.js';

const router = express.Router();
router.post('/register',registerUser);
router.post('/login',logInUser);
router.post('/logout',logoutUser);
router.get('/check-auth',VerifyJWTAndCookies,getUser);

export default router;