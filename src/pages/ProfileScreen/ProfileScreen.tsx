import React, { useContext, useEffect, useState } from 'react';
import blankImage from '../../images/blankImage.png';
import whiteImage from '../../images/whiteImage.png';
import styles from './ProfileScreenStyles.module.css';
import { Typography } from '../../components/Typography/Typography';
import { tempateUser } from '../../dummyData/DummyData';
import { ImageCard } from '../../components/ImageCard/ImageCard';
import { TitleAndText } from '../../components/TitleAndText/TitleAndText';
import { Line } from '../../components/Line/Line';
import { ScreenWrapper } from '../../components/ScreenWrapper/ScreenWrapper';
import { AuthContext } from '../../providers/auth/authContext';
import axios from 'axios';
import {
  AuthUser,
  CompanyDto,
  PaginatedCompanyDto
} from '../../services/types';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { config } from '../../config/config';

type ProfileScreenProps = unknown;

export const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const { user, getMe, signOut } = useContext(AuthContext);
  const [userCompanies, setUserCompanies] = useState<CompanyDto[]>([]);
  const [authUser, setAuthUser] = useState<AuthUser>(tempateUser);

  const navigate = useNavigate();

  const signOutOfProfile = () => {
    signOut();
    navigate('/pretraga');
  };

  const getUserCompanies = () => {
    axios
      .get(`${config.API_URL}companies`, {
        params: { userId: user?._id }
      })
      .then(function (response) {
        if (response.data) {
          setUserCompanies((response.data as PaginatedCompanyDto).data);
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
      setAuthUser(user);
      getUserCompanies();
    }
  }, [user]);

  useEffect(() => {
    getMe();
  }, []);

  return (
    <ScreenWrapper>
      <div className={styles.screenWrapper}>
        <div className={styles.flexColumn}>
          <div className={styles.headerImageContainer}>
            <img
              src={authUser.headerImage}
              alt="failedToRender"
              className={styles.imageStyle}
            />
          </div>
          <div className={styles.mainContainer}>
            <div className={styles.imageAndNameWrapper}>
              <div className={styles.profilePictureContainer}>
                <img
                  src={authUser.profilePicture}
                  alt="failedToRender"
                  className={styles.profilePictureStyle}
                />
              </div>
              <div className={styles.nameAndProfessionContainer}>
                <div className={styles.nameAndProfession}>
                  <Typography
                    variant={'headingBold'}
                  >{`${authUser.firstName} ${authUser.lastName}`}</Typography>
                  <Typography variant={'subHeadingBold'}>
                    {authUser.occupation}
                  </Typography>
                </div>
              </div>
            </div>
            <div className={styles.dataAndBusinessesWrapper}>
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: '16px' }}>
                  <Typography variant="subHeadingBold">Kratki bio</Typography>
                </div>
                <Typography variant={'bodyNormal'}>{authUser.bio}</Typography>
                <div className={styles.lineContainer}>
                  <Line />
                </div>
                <div style={{ marginBottom: '36px', marginTop: '36px' }}>
                  <Typography variant={'subHeadingBold'}>Kontakt</Typography>
                </div>
                <div className={styles.mainInformationWrapper}>
                  <div className={styles.informationContainer}>
                    <div style={{ marginBottom: '40px' }}>
                      <TitleAndText
                        title="Adresa:"
                        text={
                          authUser.shouldHideAddress ? '-' : authUser.address
                        }
                      />
                    </div>
                    <div style={{ marginBottom: '40px' }}>
                      <TitleAndText title="Grad:" text={authUser.city} />
                    </div>
                  </div>
                  <div className={styles.informationContainerWithGap}>
                    <TitleAndText
                      title="Telefon:"
                      text={authUser.shouldHidePhone ? '-' : authUser.phone}
                    />
                    <TitleAndText
                      title="Email:"
                      text={authUser.shouldHideEmail ? '-' : authUser.email}
                    />
                  </div>
                </div>
                <div className={styles.lineContainer}>
                  <Line />
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: '16px' }}>
                  <Typography variant="subHeadingBold">Moji Biznisi</Typography>
                </div>
                <div className={styles.myBusinessesContainer}>
                  {userCompanies.map((service) => (
                    <div className={styles.businessStyle}>
                      <ImageCard
                        image={blankImage}
                        type={'header'}
                        headerText={service.name}
                        onClick={() => navigate(`/biznis/${service._id}`)}
                      />
                    </div>
                  ))}
                  <div className={styles.businessStyle}>
                    <ImageCard
                      type={'header'}
                      headerText={'Dodaj novi'}
                      onClick={() => navigate('/biznis/novi')}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: '34px' }}>
              <Button
                text="Log out"
                variant="filled"
                onClick={signOutOfProfile}
              />
            </div>
          </div>
        </div>
      </div>
    </ScreenWrapper>
  );
};
