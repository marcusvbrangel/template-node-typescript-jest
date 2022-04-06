import request from 'supertest';

describe('API Operations', () => {
  it('Should return a status code 200', () => {
    return request('http://localhost:8080')
      .get('/')

      .expect(200);
  });
});
