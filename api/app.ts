import * as express from 'express';
import { Express } from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { getHelloRoutes } from './hello';


const app: Express = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', getHelloRoutes());

export default app;
