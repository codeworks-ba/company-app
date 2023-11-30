import React from 'react';
import blankImage from '../../images/blankImage.png';
import whiteImage from '../../images/whiteImage.png';
import { styles } from './ProfileScreen.styles';
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
      <div style={styles.entireScreenContainer}>
        <div style={styles.flexColumn}>
          <div style={styles.headerImageContainer}>
            <img
              src={blankImage}
              alt="failedToRender"
              style={styles.imageStyle}
            />
          </div>
          <div style={styles.mainContainer}>
            <div style={styles.flexRow}>
              <div style={styles.profilePictureContainer}>
                <img
                  src={whiteImage}
                  alt="failedToRender"
                  style={styles.profilePictureStyle}
                />
              </div>
              <div style={styles.nameAndProfessionContainer}>
                <div style={styles.flexColumn}>
                  <Typography variant={'headingBold'}>Ime Prezime</Typography>
                  <Typography variant={'subHeadingBold'}>Zanimanje</Typography>
                </div>
              </div>
            </div>
            <div style={styles.dataAndBusinessesWrapper}>
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
                <Line />
                <div style={{ marginBottom: '36px' }}>
                  <Typography variant={'subHeadingBold'}>Kontakt</Typography>
                </div>
                <div style={styles.mainInformationWrapper}>
                  <div style={styles.informationContainer}>
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
                  <div style={styles.informationContainerWithGap}>
                    <TitleAndText title="Telefon:" text="+387 33 11 111" />
                    <TitleAndText title="Email:" text="company@mail.com" />
                  </div>
                </div>
                <Line />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: '16px' }}>
                  <Typography variant="subHeadingBold">Moji Biznisi</Typography>
                </div>
                <div style={styles.myBusinessesContainer}>
                  {businesses.map((service) => (
                    <div style={styles.businessStyle}>
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
