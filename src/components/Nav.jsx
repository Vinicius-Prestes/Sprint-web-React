import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavbarContainer>
      <HamburgerMenu onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </HamburgerMenu>
      <Menu open={menuOpen}>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
      </Menu>
      <NavRight>
        <Link to="/login">Entrar</Link>
        <Link to="/signup">Criar Conta</Link>
      </NavRight>
    </NavbarContainer>
  );
};

export default Navbar