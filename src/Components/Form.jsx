import '../assets/css/Form.css'
import React, { useState } from 'react';

export const Form = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    user: '',
    email: '',
    phone: '',
    id: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userExists = users.some(user => user.id === formData.id);
    
    if (userExists) {
      alert('El user con este ID ya existe.');
    } else {
      setUsers([...users, formData]);
      alert('user registrado exitosamente.');
    }
  };

  return (
    <section>
      <article>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input type="text" name="user" placeholder="User" value={formData.user} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
            <input type="text" name="id" placeholder="Identification" value={formData.id} onChange={handleChange} />
            <button type="submit">Register</button>
        </form>
      </article>
    </section>
  );
}

