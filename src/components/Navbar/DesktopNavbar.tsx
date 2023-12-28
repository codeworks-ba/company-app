import React from 'react';
import { AuthUser, MyBusiness, NavbarItems } from '../../services/types';
import logo from '../../images/logo.png';
import styles from './NavbarStyles.module.css';
import { TabGroup } from '../Tabs/TabGroup/TabGroup';
import { ProfileButton } from '../ProfileButton/ProfileButton';
import { Button } from '../Button/Button';

type DesktopNavbarProps<T = string> = {
  tabs: Record<string, NavbarItems | MyBusiness>;
  defaultTab?: T;
  onProfileClick: () => void;
  onRegisterClick: () => void;
  onLoginClick: () => void;
  user: AuthUser | undefined;
};

export const DesktopNavbar: React.FC<DesktopNavbarProps> = ({
  tabs,
  defaultTab,
  onLoginClick,
  onProfileClick,
  onRegisterClick,
  user
}) => {
  return (
    <>
      <div className={styles.titleWrapper}>
        <img src={logo} alt="Alumni" className={styles.logoStyle} />
      </div>
      <TabGroup tabs={tabs} defaultTab={defaultTab} />
      {user ? (
        <ProfileButton onClick={onProfileClick} />
      ) : (
        <div className={styles.buttonsWrapper}>
          <Button
            variant={'filled'}
            text="Registruj se"
            onClick={onRegisterClick}
          />
          <Button
            variant={'outlined'}
            text="Prijavi se"
            onClick={onLoginClick}
          />
        </div>
      )}
    </>
  );
};
