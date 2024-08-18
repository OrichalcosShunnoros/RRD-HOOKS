import { useState } from 'react';
import '../assets/css/BgClr.css'

export const BackgroundColorChanger = () => {
  const [color, setColor] = useState('#333333');

  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <section style={{ backgroundColor: color, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button className='btnClr' onClick={generateRandomColor}>Cambiar Color de Fondo</button>
    </section>
  );
}