"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    password: String,
    username: String
});
exports.User = mongoose.model('User', userSchema);
