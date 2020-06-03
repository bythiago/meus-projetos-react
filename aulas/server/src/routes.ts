import express, { request, response } from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create);

// index, show, create, update, delete

export default routes;

// Service Pattern
// Repositore Pattern (data mapper)