import React from 'react';
import './BookListItem.scss';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import { Book } from '../../utils/types';

export type Props = {
  book: Book;
};

const BookListItem: React.FC<Props> = ({ book }) => (
  <li className="card">
    <Link
      to={`${book.genre}/${book.pathName}`}
      className="card__link"
    >
      <img
        className="card__image"
        src={book.imageLink}
        alt={book.name}
      />
      <p className="card__author">{book.author}</p>
      <p className="card__title">{book.name}</p>
      <p className="card__subtitle">{book.annotation}</p>
      <p className="card__subtitle">Средний рейтинг:</p>
      <div className="card__rating">
        <StarRatingComponent
          name="star"
          value={book.averageRating}
          editing={false}
        />
      </div>
    </Link>
  </li>
);

export default BookListItem;
