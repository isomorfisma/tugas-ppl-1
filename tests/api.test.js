const request = require('supertest');
const app = require('../app');

describe('Book API CRUD Operations', () => {
    it('should create a new book', async () => {
        const res = await request(app)
            .post('/api/books')
            .send({ title: 'Belajar Docker', author: 'John Doe' });
        expect(res.statusCode).toEqual(201);
        expect(res.body.data).toHaveProperty('id');
    });

    it('should fetch all books', async () => {
        const res = await request(app).get('/api/books');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body.data)).toBeTruthy();
    });
});