import React from 'react';
import { Link } from 'react-router-dom';

// Style
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo"></div>
      <nav>
        <Link to="/">Početna</Link>
        <Link to="/proizvodi">Proizvodi</Link>
        {/* todo: display only if user is logged in */}
        {/* <Link to="/racun">Račun</Link> */}
        <Link to="/kontakt">Kontakt</Link>
        {/* todo: if user is logged in display email */}
        <div className="login-register">
          <Link to="/prijava">Prijava</Link>
          <Link to="/registracija">Registracija</Link>
        </div>
      </nav>
    </header>
  );
};

export { Header };
