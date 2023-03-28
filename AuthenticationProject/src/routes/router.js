import {Router} from 'express';
import {createJwt, login, privated } from '../controller/controller.js'

const routes = Router();

routes.get('/jwt', createJwt) //toda rota é feita da mesma forma
routes.get('/login', login )
routes.get('/private', privated)

export default routes;