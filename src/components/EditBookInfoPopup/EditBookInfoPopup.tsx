import React from 'react';
import './EditBookInfoPopup.scss';
import PopupWithForm from './../PopupWithForm/PopupWithForm';
import classnames from 'classnames';
import Button from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import FormValidator from '../../hooks/FormValidator';
import { Book } from '../../utils/types';

export type Props = {
  isOpen: boolean;
  onUpdateBookInfo: (updatedBook: Book) => void;
  onClose: () => void;
  openedBook: Book;
};

const EditBookInfoPopup: React.FC<Props> = ({
  isOpen,
  onUpdateBookInfo,
  onClose,
  openedBook
}) => {

  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm
  } = FormValidator();

  // колбек сабмита формы
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    onUpdateBookInfo({
      ...openedBook,
      name: values.bookName!,
      imageLink: values.imageLink!,
      author: values.author!,
      publishingYear: values.publishingYear!,
      genre: values.genre!,
      annotation: values.annotation!
    })
    onClose();
  }

  React.useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  const submitButtonClassName: string = classnames('popup__button', {
    'button_disabled': !isValid
  });

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <p className="popup__title">Обновить информацию</p>
      <span className="popup__input-text">Название книги</span>
      <Input
        type="text"
        name="bookName"
        placeholder="Введите название книги"
        required={true}
        minLength={5}
        maxLength={20}
        onChange={handleChange}
        value={values.bookName || ''}
        errorText={errors.bookName!}
      />
      <span className="popup__input-text">Ссылка на картинку</span>
      <Input
        type="url"
        name="imageLink"
        placeholder="Введите ссылку на картинку"
        required={true}
        minLength={5}
        onChange={handleChange}
        value={values.imageLink || ''}
        errorText={errors.imageLink!}
      />
      <span className="popup__input-text">Автор книги</span>
      <Input
        type="text"
        name="author"
        placeholder="Введите имя автора"
        required={true}
        minLength={5}
        maxLength={20}
        onChange={handleChange}
        value={values.author || ''}
        errorText={errors.author!}
      />
      <span className="popup__input-text">Год издания</span>
      <Input
        type="text"
        name="publishingYear"
        placeholder="Введите год издания"
        required={true}
        minLength={5}
        maxLength={20}
        onChange={handleChange}
        value={values.publishingYear || ''}
        errorText={errors.publishingYear!}
      />
      <span className="popup__input-text">Жанр книги</span>
      <Input
        type="text"
        name="genre"
        placeholder="Введите жанр книги"
        required={true}
        minLength={5}
        maxLength={20}
        onChange={handleChange}
        value={values.genre || ''}
        errorText={errors.genre!}
      />
      <span className="popup__input-text">Аннотация</span>
      <Input
        type="text"
        name="annotation"
        placeholder="Введите аннотацию"
        required={true}
        minLength={5}
        maxLength={20}
        onChange={handleChange}
        value={values.annotation || ''}
        errorText={errors.annotation!}
      />
      <Button
        className={submitButtonClassName}
        type="submit"
      >
        Отправить
      </Button>
    </PopupWithForm>
  );
};

export default EditBookInfoPopup;
