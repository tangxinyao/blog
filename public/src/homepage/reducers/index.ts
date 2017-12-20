import { combineReducers } from 'redux';
import { loginReducer } from './login';
import { searchReducer } from './search';
import { writeReducer } from './write';

export const rootReducer = combineReducers({
    login: loginReducer,
    search: searchReducer,
    write: writeReducer
});
