import React from 'react';
import styles from './AdminNavbarStyles.module.css';
import { Typography } from '../../Typography/Typography';
import { Button } from '../../Button/Button';
import { useNavigate } from 'react-router-dom';

type AdminNavbarProps = unknown;

export const AdminNavbar: React.FC<AdminNavbarProps> = () => {
  const navigate = useNavigate();
  return (
    <nav className={styles.navContainer}>
      <Typography variant="subHeadingBold">Meni</Typography>
      <div className={styles.navOptions}>
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => {
            navigate('verifikuj-biznis');
          }}
        >
          <Typography variant="bodyNormal">
            Zahtjevi za kreiranje biznisa
          </Typography>
        </div>
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => {
            navigate('dodaj-vijest');
          }}
        >
          <Typography variant="bodyNormal">Kreiraj objavu</Typography>
        </div>
      </div>
    </nav>
  );
};
