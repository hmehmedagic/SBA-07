import React from 'react';

const RatingBar = ({ value }) => {
  let hashColor;
  const getColor = (value) => {
    if (value >= 0 && value < 20) {
      hashColor = '#C23B22';
      return 'linear-gradient(90deg, #C23B22 20%, #000000 20%)';
    } else if (value >= 20 && value < 40) {
      hashColor = '#FF964F';
      return 'linear-gradient(90deg, #FF964F 40%, #000000 40%)';
    } else if (value >= 40 && value < 60) {
      hashColor = '#FFDD3C';
      return 'linear-gradient(90deg, #FFDD3C 60%, #000000 60%)';
    } else if (value >= 60 && value < 80) {
      hashColor = '#538C50';
      return 'linear-gradient(90deg, #538C50 80%, #000000 80%)';
    } else if (value >= 80 && value < 90) {
      hashColor = '#225DB4';
      return 'linear-gradient(90deg, #225DB4 90%, #000000 90%)';
    } else if (value >= 90 && value <= 100) {
      hashColor = '#876F98';
      return 'linear-gradient(90deg, #876F98 100%, #000000 100%)';
    } else {
      hashColor = '#41403D'
      return 'linear-gradient(90deg, #000000 0%, #000000 0%)';
    }
  };
  

  const barStyle = {
    width: `${value}%`,
    backgroundImage: getColor(value),
    height: '20px',
    position: 'relative',
    borderRadius: '1px',
    border: `solid 1px ${hashColor}`,
    overflow: 'hidden',
  };

  const valueStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
  };

  return (
    <div className="container">
      <div className="bar" style={barStyle}>
        <span className='bar-value' style={valueStyle}>{value}</span>
      </div>
    </div>
  );
};

export default RatingBar;
