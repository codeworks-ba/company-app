import React from 'react';
import { styles } from './Navbar.styles';
import { Link } from 'react-router-dom';

type NavbarProps = unknown;

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav style={styles.navContainer}>
      <Link to={'/'} style={styles.textColor}>
        Alumni
      </Link>
      <Link to={'/'} style={styles.textColor}>
        Dashboard
      </Link>
      <Link to={'/explore'} style={styles.textColor}>
        Explore
      </Link>
      <Link to={'/my-business'} style={styles.textColor}>
        My Business
      </Link>
    </nav>
  );
};
