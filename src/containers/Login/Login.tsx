import React from 'react';
import './Login.scss';
import classnames from 'classnames';
import Button from '../../components/UI/Button/Button';
import { Input } from '../../components/UI/Input/Input';
import {
  setCurrentUserActionCreator,
  setIsLoggedInActionCreator
} from '../../store/actions/userActionCreators';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FormValidator from '../../hooks/FormValidator';
import { User } from '../../utils/types';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    values,
    handleChange,
    errors,
    isValid,
  } = FormValidator();

  const submitButtonClassName: string = classnames('login__button', {
    'button_disabled': !isValid
  });

  // генерируем случайный токен
  const generateToken = (): string => {
    const token: string = Math.random().toString(16).substring(2, 14);
    return token + token;
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    const token: string = generateToken();
    localStorage.setItem('token', token);
    history.push('/');
    const newCurrentUser: User = {
      userName: values.userName!
    }
    dispatch(setCurrentUserActionCreator(newCurrentUser));
    localStorage.setItem('user', JSON.stringify(newCurrentUser));
    dispatch(setIsLoggedInActionCreator(true));
  }

  return (
    <div className="login">
      <form
        className="login__form"
        onSubmit={handleSubmit}
      >
        <p className="login__title">Вход</p>
        <span className="login__input-text">Имя пользователя</span>
        <Input
          type="text"
          name="userName"
          placeholder="Введите имя пользователя"
          required={true}
          minLength={5}
          maxLength={30}
          onChange={handleChange}
          value={values.userName || ''}
          errorText={errors.userName!}
        />
        <span className="login__input-text">Пароль</span>
        <Input
          type="password"
          name="password"
          placeholder="Введите пароль"
          required={true}
          minLength={5}
          maxLength={30}
          onChange={handleChange}
          value={values.password || ''}
          errorText={errors.password!}
        />
        <Button
          className={submitButtonClassName}
          type='submit'
        >
          Войти
        </Button>
      </form>
    </div>
  );
}

export default Login;
