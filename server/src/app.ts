import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as jwt from 'koa-jwt';
import * as Router from 'koa-router';

import { SECRET_KEY } from './config/constant';
import { imageRouter, postRouter, tokenRouter } from './routes';
import { connectDB } from './utils/db';

connectDB('mongodb://localhost/blog', { useMongoClient: true });

const app = new Koa();
const router = new Router();

router.prefix('/api');
router.use('/image', imageRouter.routes(), imageRouter.allowedMethods());
router.use('/token', tokenRouter.routes(), tokenRouter.allowedMethods());
router.use('/post', postRouter.routes(), postRouter.allowedMethods());

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.use(jwt({ secret: SECRET_KEY }).unless({ path: [/^\/api\/token/] }));
app.listen(3000);
