import express, { request, response } from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
        return {
            id : item.id,
            title : item.title,
            url : `http://localhost:3333/uploads/${item.image}`,
        };
    });

    return response.json(serializedItems);
});

routes.post('/points', async (request, response) => {
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = request.body;

    const ids = await knex('points').insert({
        image : 'image-fake',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf
    });

    const pointItens = items.map((itemId: number) => {
        return {
            itemId,
            pointId: ids[0],
        }
    });

    await knex('point_items').insert(pointItens);

    return response.json({ success : true });
});

export default routes;