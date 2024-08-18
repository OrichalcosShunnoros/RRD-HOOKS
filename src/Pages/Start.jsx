import React, { useState } from 'react';
import '../assets/css/Start.css'

const Greeting = ({ name }) => {
  return <h2>Bienvenido {name}</h2>;
};

export const NameInput = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <section>
      <article>
      <Greeting name={name} />
      <input
        type="text"
        placeholder="Ingrese su nombre completo"
        value={name}
        onChange={handleChange}
      />
      </article>
    </section>
  );
};
