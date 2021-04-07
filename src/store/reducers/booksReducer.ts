import { books } from '../../utils/constants';
import {
  BooksState,
  BooksAction,
  Book
} from '../../utils/types';
import {
  SET_BOOKS,
  SET_BOOKS_TO_SHOW,
  SET_BOOK_GENRE,
  FILTER_BOOKS_BY_AUTHOR,
  FILTER_BOOKS_BY_NAME,
  FILTER_BOOKS_BY_RATING,
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
    case FILTER_BOOKS_BY_AUTHOR:
      return {
        ...state,
        booksToShow: state.booksToShow.filter((item: Book) => {
          return item.author.trim().toLowerCase().includes(action.author!.trim().toLowerCase());
        })
      };
    case FILTER_BOOKS_BY_NAME:
      return {
        ...state,
        booksToShow: state.booksToShow.filter((item: Book) => {
          return item.name.trim().toLowerCase().includes(action.name!.trim().toLowerCase());
        })
      };
    case FILTER_BOOKS_BY_RATING:
      return {
        ...state,
        booksToShow: state.booksToShow.sort((a: Book, b: Book) => {
          if (action.selectedRatingOption === 'Сначала с низким рейтингом') {
            return a.averageRating - b.averageRating;
          }
          return b.averageRating - a.averageRating;
        })
      };
    default:
      return state;
  };
};
