import React from 'react';
import img from '../img/icon-brand-recognition.svg';

function StatisticItem(props) {
  const { data } = props;
  return (
    <div className="item">
      <span className="icon">
        <img src={data.img} alt="" />
      </span>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
}

export default StatisticItem;
