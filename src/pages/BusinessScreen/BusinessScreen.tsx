import React from 'react';
import styles from './BusinessScreenStyles.module.css';
import blankImage from '../../images/blankImage.png';
import whiteImage from '../../images/whiteImage.png';
import { Typography } from '../../components/Typography/Typography';
import { Tag } from '../../components/Tag/Tag';
import { ImageCard } from '../../components/ImageCard/ImageCard';
import { services } from '../../dummyData/DummyData';
import { TitleAndText } from '../../components/TitleAndText/TitleAndText';
import { Link } from '../../components/Link/Link';
import { Line } from '../../components/Line/Line';
import { ScreenWrapper } from '../../components/ScreenWrapper/ScreenWrapper';

type BusinessScreenProps = unknown;

export const BusinessScreen: React.FC<BusinessScreenProps> = () => {
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
            <div className={styles.flexRow}>
              <div className={styles.profilePictureContainer}>
                <img
                  src={whiteImage}
                  alt="failedToRender"
                  className={styles.profilePictureStyle}
                />
              </div>
              <div className={styles.nameAndTagsWrapper}>
                <div className={styles.flexRow}>
                  <div style={{ flex: 1 }}>
                    <div className={styles.flexColumn}>
                      <Typography variant={'headingBold'}>
                        Naziv biznisa
                      </Typography>
                      <Typography variant={'subHeadingBold'}>
                        Kategorija
                      </Typography>
                      <div className={styles.tagWrapper}>
                        <div style={{ width: '65px', height: '36px' }}>
                          <Tag text="TAG" />
                        </div>
                        <div style={{ width: '65px', height: '36px' }}>
                          <Tag text="TAG" />
                        </div>
                        <div style={{ width: '65px', height: '36px' }}>
                          <Tag text="TAG" />
                        </div>
                        <div style={{ width: '65px', height: '36px' }}>
                          <Tag text="TAG" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.socialMediaWrapper}>
                    <div className={styles.socialMediaContainer}>
                      <img
                        src={whiteImage}
                        alt="failedToRender"
                        className={styles.socialMediaImageStyle}
                      />
                    </div>
                    <div className={styles.socialMediaContainer}>
                      <img
                        src={whiteImage}
                        alt="failedToRender"
                        className={styles.socialMediaImageStyle}
                      />
                    </div>
                    <div className={styles.socialMediaContainer}>
                      <img
                        src={whiteImage}
                        alt="failedToRender"
                        className={styles.socialMediaImageStyle}
                      />
                    </div>
                    <div className={styles.socialMediaContainer}>
                      <img
                        src={whiteImage}
                        alt="failedToRender"
                        className={styles.socialMediaImageStyle}
                      />
                    </div>
                    <div className={styles.socialMediaContainer}>
                      <img
                        src={whiteImage}
                        alt="failedToRender"
                        className={styles.socialMediaImageStyle}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ marginBottom: '16px' }}>
                <Typography variant={'subHeadingBold'}>O biznisu</Typography>
              </div>
              <Typography variant={'bodyNormal'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim.
              </Typography>
              <Line />
              <div style={{ marginBottom: '16px' }}>
                <Typography variant={'subHeadingBold'}>Usluge</Typography>
              </div>
              <div className={styles.servicesWrapper}>
                {services.map((service) => (
                  <div className={styles.serviceStyle}>
                    <ImageCard
                      image={blankImage}
                      type={'header'}
                      headerText={service.text}
                      onClick={() => {}}
                    />
                  </div>
                ))}
              </div>
              <Line />
              <div style={{ marginBottom: '36px' }}>
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
                  <TitleAndText title="Web:" text="www.mywebsite.com" />
                </div>
                <div className={styles.informationContainer}>
                  <div style={{ marginBottom: '19px' }}>
                    <TitleAndText
                      title="Radno vrijeme:"
                      text="8 - 5 (Ponedjeljak - Petak)"
                      secondText="Vikend i praznici neradni"
                    />
                  </div>
                  <TitleAndText title="Program:" text="EU4Business" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ marginBottom: '26px' }}>
                    <Typography variant="bodyBold">Linkovi:</Typography>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '5px'
                    }}
                  >
                    <Link text="Link 1" link="www.google.com" />
                    <Link text="Link 2" link="www.google.com" />
                    <Link text="Link 3" link="www.google.com" />
                    <Link text="Link 4" link="www.google.com" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScreenWrapper>
  );
};
