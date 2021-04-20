import React from 'react';
import PropTypes from 'prop-types';
import statisticalData from './statistical-data.json';

import style from './Statistics.module.scss'

function Statistics() {
    return <>
      <section className={style.statistics}>
         <h2 className={style.title}>Upload stats</h2>
            <ul className={style.statList}>
                <Stats props = {statisticalData}/>
            </ul>
      </section>
    </>
    
};

const Stats = (props) => {
    return <>
        {statisticalData.map((prop) => (
            <li className={style.item} key = {prop.id} style={{backgroundColor: randomColor()}}>
                <span className={style.label}>{prop.label}</span>
                <span className={style.percentage}>{prop.percentage}%</span>
            </li>
        ))}
    </>
}

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Stats.defaultProps = {
// 
// }

// Stats.PropTypes = {
//     
// }

        
export default Statistics;
