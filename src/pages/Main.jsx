// Main.jsx
import React, { useState, useEffect } from 'react';
import '../style.css'; // Import your CSS file

function getRandomNumber() {
  return Math.floor(Math.random() * 11) + 1;
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
        setBackground('/pictures/Akame-ga-kill.gif');
        break;
      case 3:
        setBackground('/pictures/All-Might.gif');
        break;
      case 4:
        setBackground('/pictures/Bell.gif');
        break;
      case 5:
        setBackground('/pictures/Shadow.gif');
        break;
      case 6:
        setBackground('/pictures/Gojo.gif');
        break;
      case 7:
        setBackground('/pictures/Megumin.gif');
        break;
      case 8:
        setBackground('/pictures/NGNL.gif');
        break;
      case 9:
        setBackground('/pictures/ORA.gif');
        break;
      case 10:
        setBackground('/pictures/Saber.gif');
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
