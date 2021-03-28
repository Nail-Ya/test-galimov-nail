import React from 'react';
import './MobileHeaderPopup.scss';
import { Link } from 'react-router-dom';
import { User } from '../../utils/types';
import { RootState } from './../../store/reducers/rootReducer';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import classnames from 'classnames';
import Icon from '../UI/Icon/Icon';
import Portal from './../Portal/Portal';
import { setIsMobileHeaderPopupOpenActionCreator } from '../../store/actions/componentsVisibilityActionCreators';

export type Props = {
  onSignOut: () => void;
};

const MobileHeaderPopup: React.FC<Props> = ({ onSignOut }) => {
  const dispatch = useDispatch();
  const currentUser: User = useSelector((state: RootState) => state.user.currentUser);
  const isLoggedIn: boolean = useSelector((state: RootState) => state.user.isLoggedIn);
  const isMobileHeaderPopupOpen: boolean = useSelector((state: RootState) => state.componentsVisibility.isMobileHeaderPopupOpen);

  const popupClassName: string = classnames('popup-header', {
    'popup-header_opened': isMobileHeaderPopupOpen
  });

  const closePopup = (): void => {
    dispatch(setIsMobileHeaderPopupOpenActionCreator(false));
  };

  return (
    <Portal>
      <div className={popupClassName}>
        <div className="popup-header-container">
          <header className="header__mobile">
            <Link
              to="/"
              onClick={closePopup}
              className="header__logo header__logo_type_mobile"
            >
              Books
            </Link>
            <button
              className="header__close-button"
              onClick={closePopup}
            >
              <Icon
                className='header__close-button-icon'
                name='close-icon'
              />
            </button>
          </header>
          <nav className="header-navigation header-navigation_type_mobile">
            <Link
              to="/"
              onClick={closePopup}
              className="header-navigation__link header-navigation__link_type_mobile"
            >
              Главная
            </Link>
            {
              isLoggedIn
              ?
              <button
                className="header-navigation__button header-navigation__button_type_mobile"
                onClick={onSignOut}
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
                onClick={closePopup}
                className="header-navigation__link header-navigation__link_type_mobile"
              >
                Войти
              </Link>
            }
          </nav>
        </div>
      </div>
    </Portal>
  );
}

export default MobileHeaderPopup;
