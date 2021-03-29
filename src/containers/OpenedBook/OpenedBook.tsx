import React from 'react';
import './OpenedBook.scss';
import StarRatingComponent from 'react-star-rating-component';
import { User } from '../../utils/types';
import EditBookInfoPopup from '../../components/EditBookInfoPopup/EditBookInfoPopup';
import {
  Link,
  useLocation
} from 'react-router-dom';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  setBooksActionCreator,
  setBooksToShowActionCreator
} from '../../store/actions/booksActionCreators';
import { RootState } from '../../store/reducers/rootReducer';
import { setCorrectDate } from '../../utils/helpers';
import Comment from '../../components/Comment/Comment';
import Button from '../../components/UI/Button/Button';
import {
  Book,
  Commentary
} from '../../utils/types';

const OpenedBook: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser: User = useSelector((state: RootState) => state.user.currentUser);
  const isLoggedIn: boolean = useSelector((state: RootState) => state.user.isLoggedIn);
  const booksToShow: any = useSelector((state: RootState) => state.books.booksToShow);

  // роутинг и динамическая подстановка данных в компонент в зависимости от пути //
  const path: string = useLocation().pathname.split('/')[2];
  const selectedBook: Book = booksToShow.find((item: Book) => {
    return item.pathName === path
  })!;
  const [openedBook, setOpenedBook] = React.useState<Book>(selectedBook);

  // работа с попапом //
  // обновление данных книги при сабмите формы в попапе
  const handleUpdateBookInfo = (updatedBook: Book): void => {
    setOpenedBook(updatedBook);
    const updatedBooks: Array<Book> = booksToShow.map((item: Book) => {
      return item.id === updatedBook.id ? updatedBook : item;
    });
    dispatch(setBooksToShowActionCreator(updatedBooks));
    dispatch(setBooksActionCreator(updatedBooks));
  };
  const [isEditBookInfoPopupOpened, setIsEditBookInfoPopupOpened] = React.useState<boolean>(false);


  // работа с рейтингом //
  const [rating, setRating] = React.useState<number>(0);
  const [ratingArray, setRatingArray] = React.useState<Array<number>>(openedBook!.rating);

  // функция для расчета среднего значения массива
  const calculateAverageValue = (array: Array<number>): number => {
    return array.reduce((a: number, b: number) => (a + b)) / array.length;
  };

  const setNewRating = (starsСount: number, array: Array<number>): void => {
    // добавить новую оценку в массив с оценками
    const updatedRatingArray: Array<number> = [...array, starsСount];
    // вычислить среднее арифметическое в обновленном массиве оценок
    const newRating: number = calculateAverageValue(updatedRatingArray);
    setRating(newRating);
  };

  // задаю начальное значение среднего рейтинга
  React.useEffect(() => {
    const rating: number = calculateAverageValue(ratingArray);
    setRating(rating);
  }, [ratingArray]);

  // callback при нажатии на звезду
  const onStarClick = (value: number): void => {
    setNewRating(value, ratingArray);
    setRatingArray([...ratingArray, value]);
  };


  // работа с комментариями //
  const [commentsArray, setCommentsArray] = React.useState<Array<Commentary>>(selectedBook.comments);
  const [textAreaValue, setTextAreaValue] = React.useState<string>('');

  const handleTextAreaChange = (evt: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTextAreaValue(evt.target.value);
  };

  const handleNewCommentFormSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    const newComment: Commentary = {
      id: Date.now(),
      userName: currentUser.userName!,
      message: textAreaValue,
      date: setCorrectDate(new Date().toISOString())
    };
    setCommentsArray([...commentsArray, newComment]);
    setTextAreaValue('');
  };

  return (
    <div className="book">
      <div className="book-container">
        <h1 className="book__name">{openedBook!.name}</h1>
        <img
          src={openedBook!.imageLink}
          alt="Картинка книги"
          className="book__image"
        />
        <p className="book__text">
          <span className="book__text book__text_theme_gray">
            Автор:&nbsp;
          </span>
          {openedBook!.author}
        </p>
        <p className="book__text">
          <span className="book__text book__text_theme_gray">
            Год издания:&nbsp;
          </span>
          {openedBook!.publishingYear}
        </p>
        <p className="book__text">
          <span className="book__text book__text_theme_gray">
            Жанр:&nbsp;
          </span>
          {openedBook!.genre}
        </p>
        <p className="book__text">
          <span className="book__text book__text_theme_gray">
            Аннотация:&nbsp;
          </span>
          {openedBook!.annotation}
        </p>
        <p className="book__text">
          <span className="book__text book__text_theme_gray">
            Средняя оценка:&nbsp;
          </span>
          {Math.floor(rating)}
          <span className="book__text book__text_theme_gray">
            &nbsp;оцените книгу ниже
          </span>
        </p>
        {
          isLoggedIn
          ?
          <>
            <div className="book__rating">
              <StarRatingComponent
                name="star"
                value={rating}
                onStarClick={onStarClick}
              />
            </div>
            <Button
              className="form__button"
              onClick={() => setIsEditBookInfoPopupOpened(true)}
            >
              Обновить информацию
            </Button>
          </>
          :
          <p className="book__text">
            <Link
              to="/login"
              className="book__text book__link"
            >
              Войдите,&nbsp;
            </Link>
            чтобы поставить оценку или обновить информацию по книге
          </p>
        }
        <p className="book__text book__text_theme_gray">
          Количество комментариев:&nbsp;
          <span className="book__text">
            {commentsArray.length}
          </span>
        </p>

        <ul className="book__comments">
          {
            commentsArray.map((comment: Commentary) =>
              <Comment
                key={comment.id}
                comment={comment}
              />
            )
          }
        </ul>

        {
          isLoggedIn
          ?
          <form
            onSubmit={handleNewCommentFormSubmit}
            className="form"
          >
            <textarea
              onChange={handleTextAreaChange}
              required
              className="form__textarea"
              value={textAreaValue}
            />
            <Button
              className="form__button"
              type="submit"
            >
              Отправить
            </Button>
          </form>
          :
          <p className="book__text">
            <Link
              to="/login"
              className="book__text book__link"
            >
              Войдите,&nbsp;
            </Link>
            чтобы оставить комментарий о книге
          </p>
        }
        <EditBookInfoPopup
          isOpen={isEditBookInfoPopupOpened}
          onUpdateBookInfo={handleUpdateBookInfo}
          openedBook={openedBook}
          onClose={() => setIsEditBookInfoPopupOpened(false)}
        />
      </div>
    </div>
  );
}

export default OpenedBook;
