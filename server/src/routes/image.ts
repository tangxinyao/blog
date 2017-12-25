import * as Router from 'koa-router';
import * as qiniu from 'qiniu';
import { QINIU_ACCESS_KEY, QINIU_BUCKET, QINIU_SECRET_KEY } from '../config/constant';

const mac = new qiniu.auth.digest.Mac(QINIU_ACCESS_KEY, QINIU_SECRET_KEY);

export const imageRouter = new Router();

imageRouter.post('/', async (ctx, next) => {
    const scope = QINIU_BUCKET;
    const putPolicy = new qiniu.rs.PutPolicy({ scope, expires: 3600 });
    ctx.body = { uptoken: putPolicy.uploadToken(mac) };
    return next();
});

imageRouter.put('/:name', async (ctx, next) => {
    const scope = QINIU_BUCKET + ':' + ctx.params.name;
    const putPolicy = new qiniu.rs.PutPolicy({ scope, expires: 3600 });
    ctx.body = { uptoken: putPolicy.uploadToken(mac) };
    return next();
});
