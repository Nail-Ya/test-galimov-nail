import React from 'react';
import './Filters.scss';
import Select from 'react-select';
import Button from '../UI/Button/Button';
import { setOptions } from '../../utils/helpers';
import { RootState } from '../../store/reducers/rootReducer';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import { setBooksToShowActionCreator } from '../../store/actions/booksActionCreators';
import { setIsPreloaderShowActionCreator } from '../../store/actions/componentsVisibilityActionCreators';
import {
  Book,
  Option
} from '../../utils/types';

const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const booksToShow: Array<Book> = useSelector((state: RootState) => state.books.booksToShow);
  const books: Array<Book> = useSelector((state: RootState) => state.books.books);

  // формирование option для select
  const authorsOptionsArray: Array<Option> = setOptions(books, 'author');
  const namesOptionsArray: Array<Option> = setOptions(books, 'name');
  const ratingOptionsArray: Array<Option> = [
    { value: 'high', label: 'Сначала с высоким рейтингом' },
    { value: 'low', label: 'Сначала с низким рейтингом' },
  ];


  // сортировка по автору книги //
  const [selectedBookAuthor, setSelectedBookAuthor] = React.useState<string>('');

  // callback при выборе нужного автора из селекта
  const handleAuthorChange = (selectedOption: Option | null): void => {
    dispatch(setIsPreloaderShowActionCreator(true));
    dispatch(setBooksToShowActionCreator(books));
    setSelectedBookAuthor(selectedOption!.value);
    // задержка для имитации запроса на backend
    setTimeout(() => {
      dispatch(setIsPreloaderShowActionCreator(false));
    }, 500);
  };

  // функция поиска по автору
  const searchBooksByAuthor = (author: string): void => {
    const updatedBooksToShow: Array<Book> = booksToShow.filter((item: Book) => {
      return item.author.trim().toLowerCase().includes(author.trim().toLowerCase());
    });
    dispatch(setBooksToShowActionCreator(updatedBooksToShow));
  };

  React.useEffect(() => {
    searchBooksByAuthor(selectedBookAuthor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBookAuthor]);


  // сортировка по названию книги //
  const [selectedBookName, setSelectedBookName] = React.useState<string>('');

  // callback при выборе нужного названия книги из селекта
  const handleBookNameChange = (selectedOption: Option | null): void => {
    dispatch(setIsPreloaderShowActionCreator(true));
    dispatch(setBooksToShowActionCreator(books));
    setSelectedBookName(selectedOption!.value);
    // задержка для имитации запроса на backend
    setTimeout(() => {
      dispatch(setIsPreloaderShowActionCreator(false));
    }, 500);
  };

  // функция поиска по названию книги
  const searchBooksByName = (name: string): void => {
    const updatedBooksToShow: Array<Book> = booksToShow.filter((item: Book) => {
      return item.name.trim().toLowerCase().includes(name.trim().toLowerCase());
    });
    dispatch(setBooksToShowActionCreator(updatedBooksToShow));
  };

  React.useEffect(() => {
    searchBooksByName(selectedBookName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBookName]);


  // сортировка по рейтингу книги //
  const [selectedRatingOption, setSelectedRatingOption] = React.useState<string>('');

  // callback селекта при выборе метода сортировки по рейтингу
  const handleBookRatingOptionChange = (selectedOption: Option | null): void => {
    dispatch(setIsPreloaderShowActionCreator(true));
    dispatch(setBooksToShowActionCreator(books));
    setSelectedRatingOption(selectedOption!.value);
    // задержка для имитации запроса на backend
    setTimeout(() => {
      dispatch(setIsPreloaderShowActionCreator(false));
    }, 500);
  };

  // функция поиска по рейтингу
  const searchBooksByRating = (selectedRatingOption: string): void => {
    if (selectedRatingOption === 'low') {
      const updatedBooksToShow: Array<Book> = booksToShow.sort((a: Book, b: Book) => {
        return a.averageRating - b.averageRating;
      });
      dispatch(setBooksToShowActionCreator(updatedBooksToShow));
    } else if (selectedRatingOption === 'high') {
      const updatedBooksToShow: Array<Book> = booksToShow.sort((a: Book, b: Book) => {
        return b.averageRating - a.averageRating;
      });
      dispatch(setBooksToShowActionCreator(updatedBooksToShow));
    };
  };

  React.useEffect(() => {
    searchBooksByRating(selectedRatingOption);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRatingOption]);


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
    searchBooksByName(inputValue);
    // задержка для имитации запроса на backend
    setTimeout(() => {
      dispatch(setIsPreloaderShowActionCreator(false));
    }, 500);
  };

  // живой поиск при вводе в input
  React.useEffect(() => {
    dispatch(setIsPreloaderShowActionCreator(true));
    searchBooksByName(inputValue);
    // задержка для имитации запроса на backend
    setTimeout(() => {
      dispatch(setIsPreloaderShowActionCreator(false));
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

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
          className={'select'}
          placeholder={'Сортировать по автору'}
          options={authorsOptionsArray}
          onChange={handleAuthorChange}
        />
        <Select
          className={'select'}
          placeholder={'Сортировать по названию'}
          options={namesOptionsArray}
          onChange={handleBookNameChange}
        />
        <Select
          className={'select'}
          placeholder={'Сортировать по рейтингу'}
          options={ratingOptionsArray}
          onChange={handleBookRatingOptionChange}
        />
      </div>
    </>
  );
}

export default Filters;
