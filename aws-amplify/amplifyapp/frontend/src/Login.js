import React, { useState } from 'react';
import './App.css'; 

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true); 
  };

  return (
    <div className="login-container"> {}
      <header className="login-header">
        <h2>Projeto Adoção</h2>
        <p>Faça login para acessar sua conta</p>
      </header>
      <form className="login-form" onSubmit={handleSubmit}> {}
        <div className="login-input-container"> {}
          <label>Usuário:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div className="login-input-container"> {}
          <label>Senha:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <footer className="login-footer"> {}
        <p>&copy; Desenvolvido por Danilo Dias</p>
      </footer>
    </div>
  );
}

export default Login;