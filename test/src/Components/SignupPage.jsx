import React, { useState } from 'react';
import './SignupPage.css';

const SignupPage = ({ onLogin }) => {
  const [form, setForm] = useState({ name: '', email: '' });
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setError("Iltimos, barcha maydonlarni to‘ldiring.");
    } else {
      setError('');
      alert("Kirish muvaffaqiyatli!");
      onLogin(); // sahifani ChatApp ga almashtiradi
    }
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "signup-container dark" : "signup-container light"}>
      <div className="signup-box">
        <div className="header">
          <h1 className="title">Chat App</h1>
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ismingiz"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Gmail"
            value={form.email}
            onChange={handleChange}
          />
          <button type="submit">Kirish</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
