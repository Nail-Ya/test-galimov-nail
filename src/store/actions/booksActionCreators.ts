import {
  Book,
  BooksAction
} from '../../utils/types';
import {
  SET_BOOKS,
  SET_BOOKS_TO_SHOW,
  SET_BOOK_GENRE,
  FILTER_BOOKS_BY_AUTHOR,
  FILTER_BOOKS_BY_NAME,
  FILTER_BOOKS_BY_RATING,
} from './actionTypes';

export function setBooksActionCreator(books: Array<Book>): BooksAction {
  return {
    type: SET_BOOKS,
    books
  };
};

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

export function filterBooksByAuthorActionCreator(author: string): BooksAction {
  return {
    type: FILTER_BOOKS_BY_AUTHOR,
    author
  };
};

export function filterBooksByNameActionCreator(name: string): BooksAction {
  return {
    type: FILTER_BOOKS_BY_NAME,
    name
  };
};

export function filterBooksByRatingActionCreator(selectedRatingOption: string): BooksAction {
  return {
    type: FILTER_BOOKS_BY_RATING,
    selectedRatingOption
  };
};
