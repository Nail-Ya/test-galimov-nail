import {
  Book,
  BooksAction
} from '../../utils/types';
import {
  SET_BOOKS_TO_SHOW,
  SET_BOOK_GENRE,
} from './actionTypes';

export function setBooksToShowActionCreator(booksToShow: Array<Book>): BooksAction {
  return {
    type: SET_BOOKS_TO_SHOW,
    booksToShow
  };
};

export function setBookGenreActionCreator(bookGenre: string): BooksAction {
  return {
    type: SET_BOOK_GENRE,
    bookGenre
  };
};