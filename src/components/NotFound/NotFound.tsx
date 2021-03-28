import React from 'react';
import './NotFound.scss';
import Icon from '../UI/Icon/Icon';

const NotFound: React.FC = () => (
  <section className="not-found">
    <Icon
      className='not-found__image'
      name='not-found-icon'
    />
    <h3 className="not-found__title">Ничего не найдено</h3>
    <p className="not-found__subtitle">К сожалению по вашему запросу ничего не найдено.</p>
  </section>
);

export default NotFound;
