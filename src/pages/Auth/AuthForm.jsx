import React, { useState } from 'react';
import './AuthForm.css';

const AuthForm = () => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

   // Обрабатывает форму отправки
  function handleSubmit (e) {
    e.preventDefault();
    
    console.log({email, password});
    localStorage.email= email;
    localStorage.password= password;
  
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1 className="auth-title">Авторизация</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label  type="email">E-Mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ваш E-Mail"
              required
            />
          </div>
          
          <div className="form-group">
            <label type="password">Пароль</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ваш пароль"
              required
            />
          </div>
          
          <button type="submit" className="auth-button" onClick={handleSubmit}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;