import * as mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    password: string;
    username: string;
}

const userSchema: mongoose.Schema = new mongoose.Schema({
    password: String,
    username: String
});

export const User = mongoose.model<IUser>('User', userSchema);
