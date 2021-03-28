import { combineReducers } from 'redux';
import userReducer from './userReducer';
import componentsVisibilityReducer from './componentsVisibility';
import booksReducer from './booksReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  componentsVisibility: componentsVisibilityReducer,
  books: booksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
