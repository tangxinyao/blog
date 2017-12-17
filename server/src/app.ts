import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as Router from 'koa-router';

import { tokenRouter } from './routes';
import { connectDB } from './utils/db';

connectDB('mongodb://localhost/blog', { useMongoClient: true });

const app = new Koa();
const router = new Router();

router.prefix('/api');
router.use('/token', tokenRouter.routes(), tokenRouter.allowedMethods());

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
