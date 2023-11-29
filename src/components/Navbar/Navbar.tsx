import React, { useContext, useEffect, useState } from 'react';
import { styles } from './Navbar.styles';
import { TabGroup } from '../Tabs/TabGroup/TabGroup';
import { Typography } from '../Typography/Typography';
import { Button } from '../Button/Button';
import { AuthContext } from '../../providers/auth/authContext';
import { ProfileButton } from '../ProfileButton/ProfileButton';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';
import { ChevronLeft } from 'react-feather';
import { AuthNavbar } from './AuthNavbar';

type NavbarProps = unknown;

export const Navbar: React.FC<NavbarProps> = () => {
  const [isAuthScreen, setIsAuthScreen] = useState<boolean>(false);

  const { user, getMe } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getMe();
  }, []);

  useEffect(() => {
    setIsAuthScreen(
      location.pathname === '/register' || location.pathname === '/login'
    );
  }, [location.pathname]);

  const tabs: Record<string, string> = user
    ? {
        vijesti: 'Vijesti',
        pretraga: 'Pretraga',
        'moj-biznis': 'Moj Biznis'
      }
    : {
        vijesti: 'Vijesti',
        pretraga: 'Pretraga'
      };

  return (
    <nav style={styles.navContainer}>
      {isAuthScreen ? (
        <AuthNavbar onClick={() => navigate('')} />
      ) : (
        <>
          <div style={styles.titleWrapper}>
            <div style={{ width: '248px' }}>
              <img src={logo} alt="Alumni" style={styles.logoStyle} />
            </div>
          </div>
          <TabGroup tabs={tabs} defaultTab={'pretraga'} />
          {user ? (
            <ProfileButton onClick={() => navigate('/profile')} />
          ) : (
            <div style={styles.buttonsWrapper}>
              <Button
                variant={'filled'}
                text="Registruj se"
                onClick={() => navigate('register')}
              />
              <Button
                variant={'outlined'}
                text="Prijavi se"
                onClick={() => navigate('login')}
              />
            </div>
          )}
        </>
      )}
    </nav>
  );
};
