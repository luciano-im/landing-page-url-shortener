import React from 'react';
import StatisticItem from './statistic-item';

function Statistics() {
  return (
    <section className="statistics layout-p">
      <h2>Advanced Statistics</h2>
      <p className="description">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="statistics-items">
        <StatisticItem />
      </div>
    </section>
  );
}

export default Statistics;
