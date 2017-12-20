import * as Router from 'koa-router';

export const postRouter = new Router();

postRouter.post('/', async (ctx, next) => {
    console.log(ctx.request.body);
    return next();
});

postRouter.get('/', async (ctx, next) => {
    console.log(ctx.params);
    return next();
});
