import express from 'express';
import {
  INIT_ROUTES,
} from './symbols';

export default class Router {
  constructor() {
    this.router = new express.Router();
    this[INIT_ROUTES]();
  }

  [INIT_ROUTES]() {
    this.router.get('/health', (req, res) => res.status(204).send());
  }
}
