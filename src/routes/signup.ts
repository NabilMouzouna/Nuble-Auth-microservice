import { Router } from 'express';
import SignUp from '../controllers/signup';
const router = Router();

router.post('/', SignUp);

export default router;
