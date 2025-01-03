import express from 'express';
import { register, login } from '../controllers/authController.js';
import customLoginMiddleware from '../middlewares/customLoginMiddleware.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', customLoginMiddleware, login);

// Private API's
router.use(verifyToken);
router.get('/profile', (req, res) => {
    res.json({ message: 'This is a protected profile route', user: req.user });
})

export default router
