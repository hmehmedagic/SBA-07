// Main.jsx
import React, { useState, useEffect } from 'react';
import '../style.css'; // Import your CSS file

function getRandomNumber() {
  return Math.floor(Math.random() * 4) + 1;
}

const Main = () => {
  const [background, setBackground] = useState('');

  useEffect(() => {
    let bg = getRandomNumber();
    switch (bg) {
      case 1:
        setBackground('/pictures/Kyojuro.gif');
        break;
      case 2:
        setBackground('/pictures/Kyojuro-2.gif');
        break;
      case 3:
        setBackground('/pictures/All-Might.gif');
        break;
      default:
        setBackground('/pictures/Sung-Jin-Woo.gif');
        break;
    }
  }, []);

  return (
    <div className='root' style={{ backgroundImage: `url(${background})` }}>
    </div>
  );
};

export default Main;
