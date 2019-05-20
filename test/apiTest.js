const request = require('supertest');
const app = require('../server/index.js');

describe('GET /listings', () => {
  it('respond with a list of all listings', (done) => {
    request(app)
    .get('/listings')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});
