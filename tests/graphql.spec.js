var request = require("supertest");
var app = require('../app');

describe('Test the GraphQL path with endpoints', () => {
  it('test should pass when given proper id for resource', async () => {
    const res = await request(app)
      .post("/resources")
      .send({ query: '{ resource(id: 30) { id name } }' })
      .expect(200)
      .then((res) => {
        expect(res.body.data.resource.id).toBe('30')
        expect(res.body.data.resource.name).toBe('Volunteers of America Mission')
      })
  });

  it('test should pass when given resources query', async () => {
    const res = await request(app)
      .post("/resources")
      .send({ query: '{ resources{ id name } }' })
      .expect(200)
      .then((res) => {
        expect(res.body.data.resources[0].id).toBe('1')
        expect(res.body.data.resources[0].name).toBe('Wee Cycle')
      })
  });

  it('test should pass when given recovery query', async () => {
    const res = await request(app)
      .post("/resources")
      .send({ query: '{ recovery{ id title } }' })
      .expect(200)
  });
});
