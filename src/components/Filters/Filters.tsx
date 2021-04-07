import React from 'react';
import './Filters.scss';
import Button from '../UI/Button/Button';
import { setOptions } from '../../utils/helpers';
import { RootState } from '../../store/reducers/rootReducer';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import {
  filterBooksByAuthorActionCreator,
  filterBooksByNameActionCreator,
  filterBooksByRatingActionCreator,
  setBooksToShowActionCreator
} from '../../store/actions/booksActionCreators';
import { setIsPreloaderShowActionCreator } from '../../store/actions/componentsVisibilityActionCreators';
import {
  Book,
  SelectOption
} from '../../utils/types';
import Select from '../UI/Select/Select';

const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const books: Array<Book> = useSelector((state: RootState) => state.books.books);

  // формирование option для select
  const authorsOptionsArray: Array<SelectOption> = setOptions(books, 'author');
  const namesOptionsArray: Array<SelectOption> = setOptions(books, 'name');
  const ratingOptionsArray: Array<SelectOption> = [
    { id: 1, value: 'Сначала с высоким рейтингом' },
    { id: 2, value: 'Сначала с низким рейтингом' },
  ];


  // сортировка по автору книги //
  const [selectedBookAuthor, setSelectedBookAuthor] = React.useState<string>('');

  // callback при выборе нужного автора из селекта
  const handleAuthorChange = (selectedOption: SelectOption): void => {
    dispatch(setIsPreloaderShowActionCreator(true));
    dispatch(setBooksToShowActionCreator(books));
    setSelectedBookAuthor(selectedOption.value);
    // задержка для имитации запроса на backend
    setTimeout(() => {
      dispatch(setIsPreloaderShowActionCreator(false));
    }, 500);
  };

  React.useEffect(() => {
    dispatch(filterBooksByAuthorActionCreator(selectedBookAuthor));
  }, [dispatch, selectedBookAuthor]);


  // сортировка по названию книги //
  const [selectedBookName, setSelectedBookName] = React.useState<string>('');

  // callback при выборе нужного названия книги из селекта
  const handleBookNameChange = (selectedOption: SelectOption): void => {
    dispatch(setIsPreloaderShowActionCreator(true));
    dispatch(setBooksToShowActionCreator(books));
    setSelectedBookName(selectedOption.value);
    // задержка для имитации запроса на backend
    setTimeout(() => {
      dispatch(setIsPreloaderShowActionCreator(false));
    }, 500);
  };

  React.useEffect(() => {
    dispatch(filterBooksByNameActionCreator(selectedBookName));
  }, [dispatch, selectedBookName]);


  // сортировка по рейтингу книги //
  const [selectedRatingOption, setSelectedRatingOption] = React.useState<string>('');

  // callback селекта при выборе метода сортировки по рейтингу
  const handleBookRatingOptionChange = (selectedOption: SelectOption): void => {
    dispatch(setIsPreloaderShowActionCreator(true));
    dispatch(setBooksToShowActionCreator(books));
    setSelectedRatingOption(selectedOption.value);
    // задержка для имитации запроса на backend
    setTimeout(() => {
      dispatch(setIsPreloaderShowActionCreator(false));
    }, 500);
  };

  React.useEffect(() => {
    dispatch(filterBooksByRatingActionCreator(selectedRatingOption));
  }, [dispatch, selectedRatingOption]);


  // поиск по названию книги //
  const [inputValue, setInputValue] = React.useState<string>('');

  // колбек при onChange инпута
  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setIsPreloaderShowActionCreator(true));
    dispatch(setBooksToShowActionCreator(books));
    setInputValue(evt.target.value);
  };

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    dispatch(setIsPreloaderShowActionCreator(true));
    evt.preventDefault();
    dispatch(filterBooksByNameActionCreator(inputValue));
    // задержка для имитации запроса на backend
    setTimeout(() => {
      dispatch(setIsPreloaderShowActionCreator(false));
    }, 500);
  };

  // живой поиск при вводе в input
  React.useEffect(() => {
    dispatch(setIsPreloaderShowActionCreator(true));
    dispatch(filterBooksByNameActionCreator(inputValue));
    // задержка для имитации запроса на backend
    setTimeout(() => {
      dispatch(setIsPreloaderShowActionCreator(false));
    }, 500);
  }, [dispatch, inputValue]);

  return (
    <>
      <form
        className="search__form"
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          className="search__input"
          placeholder="Введите название книги"
          onChange={handleInputChange}
          required
        />
        <Button
          className="search__button"
          type="submit"
        >
          Искать
        </Button>
      </form>
      <div className="cards__filters">
        <Select
          placeholder={'Сортировать по автору'}
          options={authorsOptionsArray}
          onChange={handleAuthorChange}
        />
        <Select
          placeholder={'Сортировать по названию'}
          options={namesOptionsArray}
          onChange={handleBookNameChange}
        />
        <Select
          placeholder={'Сортировать по рейтингу'}
          options={ratingOptionsArray}
          onChange={handleBookRatingOptionChange}
        />
      </div>
    </>
  );
}

export default Filters;
