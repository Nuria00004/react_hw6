import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
  return (
    <nav className='nav-header'>
      <ul className='menu-header-list'>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/portfolio">Портфолио</Link></li>
        <li><Link to="/contacts">Контакты</Link></li>
        <li><Link to="/todo">Todo</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/notfound">404</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
