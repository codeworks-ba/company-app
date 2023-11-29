import React from 'react';
import logo from '../../images/logo.png';
import { ChevronLeft } from 'react-feather';
import { Typography } from '../Typography/Typography';
import { styles } from './Navbar.styles';

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
        <Typography variant={'subHeadingNormal'}>Nazad</Typography>
      </div>
      <div style={{ width: '248px' }}>
        <img src={logo} alt="Alumni" style={styles.logoStyle} />
      </div>
      <div style={{ flex: 1 }}></div>
    </>
  );
};
