"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const Router = require("koa-router");
const constant_1 = require("../config/constant");
const user_1 = require("../models/user");
exports.tokenRouter = new Router();
exports.tokenRouter.post('/', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const users = yield user_1.User.find(ctx.request.body);
    if (users.length === 0) {
        ctx.status = 404;
        return next();
    }
    const token = jwt.sign({ username: users[0].username }, constant_1.SECRET_KEY, { expiresIn: 3600 });
    ctx.body = { jwt: token };
    return next();
}));
