import express from 'express';
import bodyParser from 'body-parser';
import minimist from 'minimist';
import Router from './Router';
import { accessLogger, errorLogger, logger } from './logging';

const argv = minimist(process.argv.slice(2), {
  default: {
    port: <%= port %>,
    apiVersion: 'v1',
  },
});

const router = new Router({ tokenManager });
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(accessLogger);
app.use(`/${argv.apiVersion}`, router.router);
app.use(errorLogger);
app.listen(argv.port);
logger.info(`Auth service started on port ${argv.port}`);
