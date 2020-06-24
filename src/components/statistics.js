import React from 'react';
import StatisticItem from './statistic-item';
import imgBrandRecongition from '../img/icon-brand-recognition.svg';
import imgDetailedRecords from '../img/icon-detailed-records.svg';
import imgFullyCustomizable from '../img/icon-fully-customizable.svg';

const items = [
  {
    title: 'Brand Recognition',
    img: imgBrandRecongition,
    description:
      'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
  },
  {
    title: 'Detailed Records',
    img: imgDetailedRecords,
    description:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
  },
  {
    title: 'Fully Customizable',
    img: imgFullyCustomizable,
    description:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
  },
];

function Statistics() {
  return (
    <section className="statistics layout-p">
      <h2>Advanced Statistics</h2>
      <p className="description">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="statistics-items">
        {items.map((item) => {
          return <StatisticItem data={item} key={item.title} />;
        })}
      </div>
    </section>
  );
}

export default Statistics;
