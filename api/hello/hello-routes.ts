import Hello from './hello';
import * as express from 'express';
import { Router } from 'express';

export function getHelloRoutes(): Router {
  const router = express.Router();

  router.get('/', (req, res) => {
    try {
      const hello = new Hello('why hello there :) :) :)');
      res.send(hello);
    }
    catch (err: any) {
      console.error(err);
      res.status(500).send(`error at ${ this.constructor.name }`);
    }
  });

  return router;
}
