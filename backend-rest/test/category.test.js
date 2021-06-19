const supertest = require('supertest');
const app = require('../index');

describe('Category Endpoints', () => {

    it('Get All Category', async() => {
        const res = await supertest(app).get('/categories');
        expect(res.statusCode).toEqual(200);
    });

    it('Get a Category', async() => {
        const id = '1c1ec3dc-bd97-42a4-8253-ae611ede1790';
        const res = await supertest(app).get(`/categories/${id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('name');
        expect(res.body).toHaveProperty('store_id');
    });
});