const request = require('supertest')
const app = require('../src/app')

describe('healthcheck', () => {
  test('should be alive', async () => {
    const res = await request(app).get('/healthcheck')

    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('status', 'alive!')
  });
});
