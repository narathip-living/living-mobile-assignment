const supertest = require('supertest');
const app = require('../index');

describe('Menu Endpoints', () => {

    it('Post a Menu', async() => {
        const res = await supertest(app)
            .post('/menu')
            .send({
                category_id: "1c1ec3dc-bd97-42a4-8253-ae611ede1790",
                name: "มะตะบะไก่",
                price: 40
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('category_id', '1c1ec3dc-bd97-42a4-8253-ae611ede1790');
        expect(res.body).toHaveProperty('name', 'มะตะบะไก่');
        expect(res.body).toHaveProperty('price', 40);
    });

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

    it('Put a Menu', async() => {
        const id = '6cc24df3-1d38-41a4-8fd3-452630a0db07';
        const res = await supertest(app)
            .put(`/menu/${id}`)
            .send({
                category_id: "1c1ec3dc-bd97-42a4-8253-ae611ede1790",
                name: "มะตะบะเนื้อ",
                price: 40
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual('menu was update');
    });

    it('Delete a Menu', async() => {
        const id = '6cc24df3-1d38-41a4-8fd3-452630a0db07';
        const res = await supertest(app).delete(`/menu/${id}`);
        expect(res.statusCode).toEqual(204);
        expect(res.body).toEqual('menu was success delete');
    });
    
});