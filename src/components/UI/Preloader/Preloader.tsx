import React from 'react';
import './Preloader.scss';

const Preloader: React.FC = () => (
  <section className="preloader">
    <i className="preloader__circle"></i>
    <p className="preloader__text">Идет поиск книг...</p>
  </section>
);

export default Preloader;
