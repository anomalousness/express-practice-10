import { Router } from 'express';
const router = Router();

import { getAllUsers, addUser } from '../controllers/userController.js';

router.get('/', getAllUsers);

router.post('/', addUser);

export default router;