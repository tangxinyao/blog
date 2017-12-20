import * as jwt from 'jsonwebtoken';
import * as Router from 'koa-router';

import { SECRET_KEY } from '../config/constant';
import { User } from '../models/user';

export const tokenRouter = new Router();

tokenRouter.post('/', async (ctx, next) => {
    const users = await User.find(ctx.request.body);
    if (users.length === 0) {
        ctx.status = 404;
        return next();
    }
    const token = jwt.sign({ username: users[0].username }, SECRET_KEY, { expiresIn: 3600 });
    ctx.body = { token };
    return next();
});
