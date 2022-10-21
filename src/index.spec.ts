// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';

import app from './server';

describe('hello', () => {
  it('should say hello', async () => {
    const res = await supertest(app).get('/');
    expect(res.body).toEqual({ hello: 'world!' });
    expect(res.status).toBe(200);
  });
});
