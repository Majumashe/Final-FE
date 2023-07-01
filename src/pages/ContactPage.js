import React, { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setNameError('');
    setEmailError('');

    if (name.length === 0) {
      setNameError('Ingrese un nombre');
      return;
    } else if (name.length > 5) {
      setNameError('El nombred debe ser minimo de 5 caracteres');
      return;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Ingrese un email valido');
      return;
    }

    alert(`Gracias ${name}, te contactaremos cuanto antes vía mail`);
    setName('');
    setEmail('');
  };

  return (
    <div>
      <h2>Pagina de contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <p className="error">{nameError}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ContactPage;