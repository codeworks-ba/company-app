import React, { useContext, useEffect, useState } from 'react';
import styles from './NavbarStyles.module.css';
import { AuthContext } from '../../providers/auth/authContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthNavbar } from './AuthNavbar';
import { DesktopNavbar } from './DesktopNavbar';
import { MobileNavbar } from './MobileNavbar/MobileNavbar';
import {
  MyBusiness,
  MyBusinessItems,
  NavbarItems,
  PaginatedCompanyDto
} from '../../services/types';
import axios from 'axios';

type NavbarProps = unknown;

export const Navbar: React.FC<NavbarProps> = () => {
  const [isAuthScreen, setIsAuthScreen] = useState<boolean>(false);
  const [userBusinesses, setUserBusinesses] = useState<MyBusinessItems[]>([]);
  const [currentTab, setCurrentTab] = useState<string>();

  const { user, getMe } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const getMyBusinesses = () => {
    const myBusinessesArray: MyBusinessItems[] = [];
    axios
      .get('http://localhost:3000/companies', {
        params: { userId: user?._id }
      })
      .then(function (response) {
        if (response.data) {
          (response.data as PaginatedCompanyDto).data.forEach((business) => {
            myBusinessesArray.push({
              key: business._id,
              value: business.name
            });
          });
          setUserBusinesses(myBusinessesArray);
        } else {
          console.log('NOT GOOD');
        }
      })
      .catch(function (error) {
        console.log('Error: ', error);
      });
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
      !user &&
        (location.pathname === '/register' || location.pathname === '/login')
    );
    setCurrentTab(location.pathname?.split('/')[1]);
  }, [location.pathname, user]);

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
              defaultTab={currentTab}
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
