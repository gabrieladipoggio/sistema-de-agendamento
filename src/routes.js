import { Router } from 'express';
import UserController from './app/controllers/UserController';
import database from './database'
import SessionController from './app/controllers/SessionController';

const routes = new Router();   // Endereços da interface 

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)


export default routes;