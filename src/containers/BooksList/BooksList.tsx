import React from 'react';
import './BooksList.scss';
import BookListItem from '../../components/BookListItem/BookListItem';
import { RootState } from '../../store/reducers/rootReducer';
import { useSelector } from 'react-redux';
import Preloader from '../../components/UI/Preloader/Preloader';
import NotFound from '../../components/NotFound/NotFound';
import Filters from '../../components/Filters/Filters';
import { Book } from '../../utils/types';

const BooksList: React.FC = () => {
  const booksToShow: Array<Book> = useSelector((state: RootState) => state.books.booksToShow);
  const isPreloaderShow: boolean = useSelector((state: RootState) => state.componentsVisibility.isPreloaderShow);
  return (
    <section className="cards">
      <div className="cards-container">
        <h2 className="cards__title">Перечень книг</h2>
        <Filters />
        {
          booksToShow.length === 0 && !isPreloaderShow
          &&
          <NotFound />
        }
        {
          isPreloaderShow
          ?
          <Preloader />
          :
          <ul className="cards-wrapper">
            {
              booksToShow.map((book: Book) =>
                <BookListItem
                  book={book}
                  key={book.id}
                />
              )
            }
          </ul>
        }
      </div>
    </section>
  );
}

export default BooksList;
