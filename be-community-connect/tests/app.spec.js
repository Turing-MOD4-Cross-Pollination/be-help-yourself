var request = require("supertest");
var app = require('../app');

describe('Test the GraphQL path', () => {
  it('test should fail withouth proper GtaphQL request data', async () => {
    const res = await request(app)
      .get("/resources");

    expect(res.status).toBe(400);
  });
});
