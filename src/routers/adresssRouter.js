import { adress } from '../controllers/adressController.js';
import { Router } from 'express';

const adressRouter = Router();

adressRouter.post('/adress', adress);



export default adressRouter;
