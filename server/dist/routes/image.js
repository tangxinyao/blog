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
const Router = require("koa-router");
const qiniu = require("qiniu");
const constant_1 = require("../config/constant");
const mac = new qiniu.auth.digest.Mac(constant_1.QINIU_ACCESS_KEY, constant_1.QINIU_SECRET_KEY);
exports.imageRouter = new Router();
exports.imageRouter.post('/', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const scope = constant_1.QINIU_BUCKET;
    const putPolicy = new qiniu.rs.PutPolicy({ scope, expires: 3600 });
    ctx.body = { uptoken: putPolicy.uploadToken(mac) };
    return next();
}));
exports.imageRouter.put('/:name', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const scope = constant_1.QINIU_BUCKET + ':' + ctx.params.name;
    const putPolicy = new qiniu.rs.PutPolicy({ scope, expires: 3600 });
    ctx.body = { uptoken: putPolicy.uploadToken(mac) };
    return next();
}));
