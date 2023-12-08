import React from 'react';
import blankImage from '../../images/blankImage.png';
import whiteImage from '../../images/whiteImage.png';
import styles from './ProfileScreenStyles.module.css';
import { Typography } from '../../components/Typography/Typography';
import { businesses } from '../../dummyData/DummyData';
import { ImageCard } from '../../components/ImageCard/ImageCard';
import { TitleAndText } from '../../components/TitleAndText/TitleAndText';
import { Line } from '../../components/Line/Line';
import { ScreenWrapper } from '../../components/ScreenWrapper/ScreenWrapper';

type ProfileScreenProps = unknown;

export const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  return (
    <ScreenWrapper>
      <div className={styles.screenWrapper}>
        <div className={styles.flexColumn}>
          <div className={styles.headerImageContainer}>
            <img
              src={blankImage}
              alt="failedToRender"
              className={styles.imageStyle}
            />
          </div>
          <div className={styles.mainContainer}>
            <div className={styles.imageAndNameWrapper}>
              <div className={styles.profilePictureContainer}>
                <img
                  src={whiteImage}
                  alt="failedToRender"
                  className={styles.profilePictureStyle}
                />
              </div>
              <div className={styles.nameAndProfessionContainer}>
                <div className={styles.nameAndProfession}>
                  <Typography variant={'headingBold'}>Ime Prezime</Typography>
                  <Typography variant={'subHeadingBold'}>Zanimanje</Typography>
                </div>
              </div>
            </div>
            <div className={styles.dataAndBusinessesWrapper}>
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: '16px' }}>
                  <Typography variant="subHeadingBold">Kratki bio</Typography>
                </div>
                <Typography variant={'bodyNormal'}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim.
                </Typography>
                <div className={styles.lineContainer}>
                  <Line />
                </div>
                <div style={{ marginBottom: '36px', marginTop: '36px' }}>
                  <Typography variant={'subHeadingBold'}>Kontakt</Typography>
                </div>
                <div className={styles.mainInformationWrapper}>
                  <div className={styles.informationContainer}>
                    <div style={{ marginBottom: '19px' }}>
                      <TitleAndText
                        title="Adresa:"
                        text="Simple Address 5"
                        secondText="ZIP Code, City"
                      />
                    </div>
                    <div style={{ marginBottom: '40px' }}>
                      <TitleAndText title="Grad:" text="Naziv grada" />
                    </div>
                    <TitleAndText title="Država:" text="Naziv drżave" />
                  </div>
                  <div className={styles.informationContainerWithGap}>
                    <TitleAndText title="Telefon:" text="+387 33 11 111" />
                    <TitleAndText title="Email:" text="company@mail.com" />
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
                  {businesses.map((service) => (
                    <div className={styles.businessStyle}>
                      <ImageCard
                        image={blankImage}
                        type={'header'}
                        headerText={service.text}
                        onClick={() => {}}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScreenWrapper>
  );
};
