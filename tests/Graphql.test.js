const chai = require('chai');
const expect = chai.expect;
const url = `https://stormy-depths-45174.herokuapp.com`;
const request = require('supertest')(url);
const should = chai.should();

describe('GraphQL', () => {
  //Tests
  it('Returns resource with id = 30', (done) => {
    request.post('/resources')
    .send({ query: '{ resource(id: 30) { id name } }' })
    .expect(200)
    .end((err,res) => {
      if (err) return done(err);
      res.body.data.resource.should.have.property('id')
      res.body.data.resource.should.have.property('name')
      done();
    })
  })
});
