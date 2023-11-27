import React, { useContext } from 'react';
import { styles } from './Navbar.styles';
import { TabGroup } from '../Tabs/TabGroup/TabGroup';
import { Typography } from '../Typography/Typography';
import { Button } from '../Button/Button';
import { AuthContext } from '../../providers/auth/authContext';
import { ProfileButton } from '../ProfileButton/ProfileButton';
import { useNavigate } from 'react-router-dom';

type NavbarProps = unknown;

export const Navbar: React.FC<NavbarProps> = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

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
      <div style={styles.titleWrapper}>
        <Typography variant={'headingBold'}>Alumni</Typography>
      </div>
      <TabGroup tabs={tabs} defaultTab={'pretraga'} />
      {user ? (
        <ProfileButton onClick={() => {}} />
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
    </nav>
  );
};
