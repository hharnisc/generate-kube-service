jest.unmock('../src/Router');
jest.unmock('../src/symbols');
jest.unmock('supertest');
jest.unmock('express');
jest.unmock('body-parser');
import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import {
  INIT_ROUTES,
} from '../src/symbols';
import Router from '../src/Router';

describe('Router', () => {
  it('does exist', () => {
    expect(Router).not.toEqual({});
  });

  it('does have a method to initialize routes', () => {
    const router = new Router();
    expect(router[INIT_ROUTES]).toBeDefined();
  });

  it('does handle /health route', (done) => {
    const router = new Router();
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(router.router);
    request(app)
      .get('/health')
      .expect((res) => {
        expect(res.status).toEqual(204);
        expect(res.body).toEqual({});
      })
      .end(done);
  });
});
