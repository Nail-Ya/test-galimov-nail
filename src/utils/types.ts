export interface Book {
  annotation: string;
  author: string;
  averageRating: number;
  comments: Array<Commentary>;
  genre: string;
  id: number;
  imageLink: string;
  name: string;
  pathName: string;
  publishingYear: string;
  rating: Array<number>;
};

export interface Commentary {
  date: string;
  id: number
  message: string;
  userName: string;
};

export interface SelectOption {
  value: string;
  id: number;
};

export interface User {
  userName?: string;
};

export interface InputValues {
  userName?: string;
  password?: string;
  bookName?: string;
  imageLink?: string;
  author?: string;
  publishingYear?: string;
  genre?: string;
  annotation?: string;
};

export interface ErrorValues {
  userName?: string;
  password?: string;
  bookName?: string;
  imageLink?: string;
  author?: string;
  publishingYear?: string;
  genre?: string;
  annotation?: string;
};

export interface FormValidation {
  values: InputValues;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  errors: ErrorValues;
  isValid: boolean;
  resetForm: () => void;
};

export interface DateTimeFormatOptions {
  month: 'long';
  day: 'numeric';
};

// redux
export type UserState = {
  currentUser: User;
  isLoggedIn: boolean;
};

export type UserAction = {
  type: string;
  currentUser?: User;
  isLoggedIn?: boolean;
};

export type componentsVisibilityState = {
  isPreloaderShow: boolean;
  isMobileHeaderPopupOpen: boolean;
};

export type componentsVisibilityAction = {
  type: string;
  isPreloaderShow?: boolean;
  isMobileHeaderPopupOpen?: boolean;
};

export type BooksState = {
  books: Array<Book>;
  booksToShow: Array<Book>;
  bookGenre: string;
};

export type BooksAction = {
  type: string;
  books?: Array<Book>;
  booksToShow?: Array<Book>;
  bookGenre?: string;
};
