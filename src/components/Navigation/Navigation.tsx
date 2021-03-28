import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';
import { User } from '../../utils/types';
import { RootState } from './../../store/reducers/rootReducer';
import Icon from '../UI/Icon/Icon';
import { useSelector } from 'react-redux';

export type Props = {
  onSignOut: () => void;
};

const Navigation: React.FC<Props> = ({ onSignOut }) => {
  const currentUser: User = useSelector((state: RootState) => state.user.currentUser);
  const isLoggedIn: boolean = useSelector((state: RootState) => state.user.isLoggedIn);

  return (
    <nav className="header-navigation">
      <Link
        to="/"
        className='header-navigation__link'
      >
        Главная
      </Link>
      {
        isLoggedIn
        ?
        <button
          onClick={onSignOut}
          className='header-navigation__button'
        >
          {currentUser.userName}
          <Icon
            className='header-navigation__button-icon'
            name='signout-icon-white'
          />
        </button>
        :
        <Link
          to="/login"
          className='header-navigation__link'
        >
          Войти
        </Link>
      }
    </nav>
  );
}

export default Navigation;
