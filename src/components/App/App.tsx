import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Login from '../../containers/Login/Login';
import MobileHeaderPopup from '../MobileHeaderPopup/MobileHeaderPopup';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { RootState } from './../../store/reducers/rootReducer';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import {
  setCurrentUserActionCreator,
  setIsLoggedInActionCreator,
} from '../../store/actions/userActionCreators';
import { setIsMobileHeaderPopupOpenActionCreator } from '../../store/actions/componentsVisibilityActionCreators';
import OpenedBook from '../../containers/OpenedBook/OpenedBook';
import BooksList from '../../containers/BooksList/BooksList';

const App: React.FC = () => {
  const isLoggedIn: boolean = useSelector((state: RootState) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  // проверяем наличие токена в localStorage
  React.useEffect(() => {
    const jwt: string | null = localStorage.getItem('token');
    if (jwt) {
      dispatch(setIsLoggedInActionCreator(true));
      dispatch(setCurrentUserActionCreator(JSON.parse(localStorage.getItem('user')!)));
    }
  }, [isLoggedIn, dispatch]);

  // выход пользователя из системы
  const handleSignOut = (): void => {
    localStorage.clear();
    dispatch(setIsLoggedInActionCreator(false));
    dispatch(setIsMobileHeaderPopupOpenActionCreator(false));
    dispatch(setCurrentUserActionCreator({}));
  };

  const bookGenre: string = useSelector((state: RootState) => state.books.bookGenre);

  return (
    <div className="page">
      <Header onSignOut={handleSignOut} />
      <MobileHeaderPopup onSignOut={handleSignOut} />
      <Switch>
        <Route path="/" exact component={BooksList} />
        <Route path="/login" component={Login} />
        <Route path={`${bookGenre}/:id`} component={OpenedBook} />
      </Switch>
    </div>
  );
}

export default App;
