const app = require('./api');
const supertest = require('supertest');

describe('API', () => {
  let request;

  beforeEach(() => {
    request = supertest(app);
  });

  it('responds with json items', (done) => {
    request
      .get('/items')
      .expect(200, (err, res) => {
        expect(res.body.data).toHaveLength(2);
        done();
      });
  });
});