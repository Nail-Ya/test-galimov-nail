import React from 'react';
import './Header.scss';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import Icon from '../UI/Icon/Icon';
import { useDispatch } from 'react-redux';
import { setIsMobileHeaderPopupOpenActionCreator } from '../../store/actions/componentsVisibilityActionCreators';

export type Props = {
  onSignOut: () => void;
};

const Header: React.FC<Props> = ({ onSignOut }) => {
  const dispatch = useDispatch();

  const openMobilePopup = (): void => {
    dispatch(setIsMobileHeaderPopupOpenActionCreator(true));
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link
          to="/"
          className='header__logo'
        >
          Books
        </Link>
        <Navigation onSignOut={onSignOut} />
        <button
          onClick={openMobilePopup}
          className='header__burger-menu-button'
        >
          <Icon
            className='header__burger-menu-button-icon'
            name='burger-icon-white'
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
