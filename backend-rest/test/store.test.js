const supertest = require('supertest');
const app = require('../index');

describe('Store Endpoints', () => {

    it('Post a Store', async() => {
        const res = await supertest(app)
            .post('/stores')
            .send({
                name: "พี่โสขายโรตี",
                description: "โรตีอร่อยน่ะ ฟัดมากับมือ",
                rating: 4.9
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('name', "พี่โสขายโรตี");
        expect(res.body).toHaveProperty('description', "โรตีอร่อยน่ะ ฟัดมากับมือ");
        expect(res.body).toHaveProperty('rating', 4.9);
    });

    it('Get All Store', async() => {
        const res = await supertest(app).get('/stores');
        expect(res.statusCode).toEqual(200);
    });

    it('Get a Store', async() => {
        const id = 'e5c4a391-82e0-42de-9ca9-3f4353342220';
        const res = await supertest(app).get(`/stores/${id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('name');
        expect(res.body).toHaveProperty('description');
        expect(res.body).toHaveProperty('rating');
    });

    it('Put a Store', async() => {
        const id = 'e5c4a391-82e0-42de-9ca9-3f4353342220';
        const res = await supertest(app)
            .put(`/stores/${id}`)
            .send({
                name: "พี่โสขายโรตี",
                description: "โรตีอร่อยน่ะ ฟัดมากับมือ",
                rating: 4.8
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual('store was update');
    });

    it('Delete a Store', async() => {
        const id = 'e5c4a391-82e0-42de-9ca9-3f4353342220';
        const res = await supertest(app).delete(`/stores/${id}`);
        expect(res.statusCode).toEqual(204);
        expect(res.body).toEqual('store was success delete');
    });

});