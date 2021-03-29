import { books } from '../../utils/constants';
import {
  BooksState,
  BooksAction
} from '../../utils/types';
import {
  SET_BOOKS,
  SET_BOOKS_TO_SHOW,
  SET_BOOK_GENRE,
} from '../actions/actionTypes';

const initialState: BooksState = {
  books: books,
  booksToShow: books,
  bookGenre: '',
};

export default function booksReducer(
  state: BooksState = initialState,
  action: BooksAction
): BooksState {
  switch(action.type) {
    case SET_BOOKS:
      return {
        ...state,
        books: action.books!
      };
    case SET_BOOKS_TO_SHOW:
      return {
        ...state,
        booksToShow: action.booksToShow!
      };
    case SET_BOOK_GENRE:
      return {
        ...state,
        bookGenre: action.bookGenre!
      };
    default:
      return state;
  };
};
