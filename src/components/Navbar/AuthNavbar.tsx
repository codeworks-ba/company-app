import React from 'react';
import logo from '../../images/logo.png';
import { ChevronLeft } from 'react-feather';
import { Typography } from '../Typography/Typography';
import styles from './NavbarStyles.module.css';
import styled from './AuthNavbarStyles.module.css';

type AuthNavbarProps = {
  onClick: () => void;
};

export const AuthNavbar: React.FC<AuthNavbarProps> = ({ onClick }) => {
  return (
    <>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          gap: '12px',
          cursor: 'pointer'
        }}
        onClick={onClick}
      >
        <ChevronLeft size={'30px'} />
        <div className={styled.textContainer}>
          <Typography variant={'subHeadingNormal'}>Nazad</Typography>
        </div>
      </div>
      <img src={logo} alt="Alumni" className={styles.logoStyle} />
      <div style={{ flex: 1 }}></div>
    </>
  );
};
