const supertest = require('supertest');
const app = require('../index');

describe('Menu Endpoints', () => {

    it('Get All Menu', async() => {
        const res = await supertest(app).get('/menu');
        expect(res.statusCode).toEqual(200);
    });

    it('Get a Menu', async() => {
        const id = '6cc24df3-1d38-41a4-8fd3-452630a0db07';
        const res = await supertest(app).get(`/menu/${id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('category_id');
        expect(res.body).toHaveProperty('name');
        expect(res.body).toHaveProperty('price');
    });
});