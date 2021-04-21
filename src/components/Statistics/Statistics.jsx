import React from 'react';
import PropTypes from 'prop-types';

import style from './Statistics.module.scss';

function Statistics({ title, stats }) {
  const statElements = stats.map(prop => (
    <li
      className={style.item}
      key={prop.id}
      style={{ backgroundColor: randomColor() }}
    >
      <span className={style.label}>{prop.label}</span>
      <span className={style.percentage}>{prop.percentage}%</span>
    </li>
  ));
  return (
    <>
      <section className={style.statistics}>
        {title && <h2 className={style.title}>{title}</h2>}
        <ul className={style.statList}>{statElements}</ul>
      </section>
    </>
  );
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};

export default Statistics;
