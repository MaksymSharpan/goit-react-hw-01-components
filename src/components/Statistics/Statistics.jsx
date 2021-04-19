import React, { Fragment } from 'react';

import statisticalData from './statistical-data.json';

function Statistics() {
    
    return <>
      <section className="statistics">
         <h2 className="title">Upload stats</h2>
            <ul className="stat-list">
                <Stats props={statisticalData} />
                
            </ul>
      </section>
    </>
    
};

const Stats = (props) => {
    return <>
        {statisticalData.map((prop) => (
            <li className="item" key = {prop.id}>
                <span className="label">{prop.label}</span>
                <span className="percentage">{prop.percentage}</span>
            </li>
        ))}
    </>
}

        
export default Statistics;
