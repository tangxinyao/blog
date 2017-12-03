import * as Koa from 'koa';
const app = new Koa();

import * as Router from 'koa-router';
const router = new Router();
router.get('/api/search', async (ctx) => {
    ctx.body = 'ok';
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
