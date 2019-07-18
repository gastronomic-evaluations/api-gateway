const request = require('supertest')
const app = require('../src/app')

describe('proxy', () => {
  test('should redirect request to restaurants-api', async () => {
    const res = await request(app).get('/api/restaurants')

    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(1)
  });
});
