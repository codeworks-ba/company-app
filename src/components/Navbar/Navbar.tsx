import React, { useContext, useEffect, useState } from 'react';
import styles from './NavbarStyles.module.css';
import { AuthContext } from '../../providers/auth/authContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthNavbar } from './AuthNavbar';
import { DesktopNavbar } from './DesktopNavbar';
import { MobileNavbar } from './MobileNavbar/MobileNavbar';
import { MyBusiness, MyBusinessItems, NavbarItems } from '../../services/types';
import { myBusinesses } from '../../dummyData/DummyData';

type NavbarProps = unknown;

export const Navbar: React.FC<NavbarProps> = () => {
  const [isAuthScreen, setIsAuthScreen] = useState<boolean>(false);
  const [userBusinesses, setUserBusinesses] = useState<MyBusinessItems[]>([]);

  const { user, getMe } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const getMyBusinesses = () => {
    const myBusinessesArray: MyBusinessItems[] = [];
    myBusinesses.forEach((business) => {
      myBusinessesArray.push({
        key: business.key,
        value: business.value
      });
    });
    setUserBusinesses(myBusinessesArray);
  };

  useEffect(() => {
    if (user) {
      getMyBusinesses();
    }
  }, [user]);

  useEffect(() => {
    getMe();
  }, []);

  useEffect(() => {
    setIsAuthScreen(
      location.pathname === '/register' || location.pathname === '/login'
    );
  }, [location.pathname]);

  const tabs: Record<string, NavbarItems | MyBusiness> = user
    ? {
        vijesti: {
          value: 'Vijesti'
        },
        pretraga: {
          value: 'Pretraga'
        },
        'moj-biznis': {
          title: 'Moj Biznis',
          submenuItems: userBusinesses
        },
        ...(user.role === 'admin' && {
          admin: {
            value: 'Admin Panel'
          }
        })
      }
    : {
        vijesti: {
          value: 'Vijesti'
        },
        pretraga: {
          value: 'Pretraga'
        }
      };

  return (
    <nav className={styles.navContainer}>
      {isAuthScreen ? (
        <div className={styles.authNavContainer}>
          <AuthNavbar onClick={() => navigate('')} />
        </div>
      ) : (
        <>
          <div className={styles.desktopNavbar}>
            <DesktopNavbar
              user={user}
              tabs={tabs}
              onLoginClick={() => navigate('/login')}
              onProfileClick={() => navigate('/profile')}
              onRegisterClick={() => navigate('/register')}
            />
          </div>
          <div className={styles.mobileNavbar}>
            <MobileNavbar
              user={user}
              tabs={tabs}
              defaultTab="pretraga"
              onLoginClick={() => navigate('/login')}
              onProfileClick={() => navigate('/profile')}
              onRegisterClick={() => navigate('/register')}
            />
          </div>
        </>
      )}
    </nav>
  );
};
