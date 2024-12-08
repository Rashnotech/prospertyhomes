import { Router } from 'express';
import Contact from '../controllers/contact.js';
import AuthController from '../controllers/registration.js';


const router = Router();

router.post('/contact', Contact.Sendmail);
router.post('/register', AuthController.register);


export default router;