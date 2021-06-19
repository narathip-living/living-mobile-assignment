const supertest = require('supertest');
const app = require('../index');

describe('Category Endpoints', () => {

    it('Post a Category', async() => {
        const res = await supertest(app)
            .post('/categories')
            .send({
                name: "โรตีไข่",
                store_id: "e5c4a391-82e0-42de-9ca9-3f4353342220"
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('name', "โรตีไข่");
        expect(res.body).toHaveProperty('store_id', "e5c4a391-82e0-42de-9ca9-3f4353342220");
    });

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

    it('Put a Category', async() => {
        const id = '1c1ec3dc-bd97-42a4-8253-ae611ede1790';
        const res = await supertest(app)
            .put(`/categories/${id}`)
            .send({
                name: "โรตีมะตะบะ",
                store_id: "e5c4a391-82e0-42de-9ca9-3f4353342220"
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual('category was update');
    });
});