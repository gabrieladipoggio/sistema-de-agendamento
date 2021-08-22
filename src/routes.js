import { Router } from 'express';
import UserController from './app/controllers/UserController';
import database from './database'


const routes = new Router();   // Endereços da interface 

routes.post('/users', UserController.store)


export default routes;