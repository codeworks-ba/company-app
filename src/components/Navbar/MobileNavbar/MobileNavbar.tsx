import React, { useState } from 'react';
import { AuthUser, MyBusiness, NavbarItems } from '../../../services/types';
import menu from '../../../images/menu.svg';
import { ProfileButton } from '../../ProfileButton/ProfileButton';
import logo from '../../../images/logo.png';
import siteLogo from '../../../images/AlumniLogo.svg';
import styles from './MobileNavbarStyles.module.css';
import navbarStyles from '../NavbarStyles.module.css';
import { Typography } from '../../Typography/Typography';
import { DropdownMobile } from '../../Tabs/DropdownMobile/DropdownMobile';
import { Button } from '../../Button/Button';
import { X } from 'react-feather';
import { useNavigate } from 'react-router-dom';

type MobileNavbarProps<T = string> = {
  tabs: Record<string, NavbarItems | MyBusiness>;
  defaultTab?: T;
  onProfileClick: () => void;
  onRegisterClick: () => void;
  onLoginClick: () => void;
  user: AuthUser | undefined;
};

export const MobileNavbar: React.FC<MobileNavbarProps> = ({
  tabs,
  defaultTab,
  onLoginClick,
  onProfileClick,
  onRegisterClick,
  user,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const navigateTo = (key: string) => {
    setIsOpen(false);
    navigate(key);
  };

  return (
    <div
      style={{
        backgroundColor: isOpen ? '#ebebeb' : 'white'
      }}
      className={styles.mainContainer}
    >
      <div className={styles.rowItems}>
        <div
          className={styles.hamburgerContainer}
          onClick={() => setIsOpen((oldVal) => !oldVal)}
        >
          {isOpen ? (
            <X size={'46px'} />
          ) : (
            <img src={menu} alt="menu" className={styles.hamburgerStyle} />
          )}
        </div>
        <div className={styles.logoContainer}>
          <img src={siteLogo} alt="Alumni" className={navbarStyles.logoStyle} />
        </div>
        {user ? (
          <div className={styles.profileContainer}>
            <ProfileButton onClick={onProfileClick} />
          </div>
        ) : (
          <div style={{ flex: 1 }}></div>
        )}
      </div>
      {isOpen && (
        <div className={styles.tabsWrapper}>
          <div className={styles.tabsContainer}>
            {Object.entries(tabs).map(([key, value]) =>
              'value' in value ? (
                <div
                  style={{ padding: '10px 10px 10px 14px' }}
                  onClick={() => navigateTo(key)}
                >
                  <Typography variant={'subHeadingBold'}>
                    {(value as NavbarItems).value}
                  </Typography>
                </div>
              ) : (
                <>
                  {user ? (
                    <div style={{ padding: '10px 10px 14px 14px' }}>
                      <DropdownMobile
                        key={key}
                        text={(value as MyBusiness).title}
                        dropdownItems={(value as MyBusiness).submenuItems}
                      />
                    </div>
                  ) : (
                    <div className={styles.buttonsContainer}>
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
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};
