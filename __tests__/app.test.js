import app from '../app.js';
import request from 'supertest';
import { apiBaseUrl } from '../util/utils.js';

describe('Non-existent routes', () => {
  test('returns 404 and message when calling a route that does not exist', async () => {
    const response = await request(app).get(`${apiBaseUrl}/missing`);
    expect(response.status).toBe(404);
    expect(response.res.statusMessage).toBe("Not Found");
    expect(response.res.statusMessage).toBe("Not Found");
    expect(response.res.req.path).toBe(`${apiBaseUrl}/missing`);
  });
});

describe('GET /', () => {
  test('returns 200 and valid message when calling GET /', async () => {
    const response = await request(app).get(`${apiBaseUrl}/`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("GET route");
    expect(response.res.req.path).toBe(`${apiBaseUrl}/`);
  });
});

describe('POST /', () => {
  test('returns 201 and valid message when calling POST /', async () => {
    const response = await request(app).post(`${apiBaseUrl}/`);
    expect(response.status).toBe(201);
    expect(response.body.message).toBe("POST route");
    expect(response.res.req.path).toBe(`${apiBaseUrl}/`);
  });
});