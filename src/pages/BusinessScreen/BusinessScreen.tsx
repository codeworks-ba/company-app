import React, { useEffect, useState } from 'react';
import styles from './BusinessScreenStyles.module.css';
import blankImage from '../../images/blankImage.png';
import whiteImage from '../../images/whiteImage.png';
import { Typography } from '../../components/Typography/Typography';
import { Tag } from '../../components/Tag/Tag';
import { ImageCard } from '../../components/ImageCard/ImageCard';
import { services, templateBusiness } from '../../dummyData/DummyData';
import { TitleAndText } from '../../components/TitleAndText/TitleAndText';
import { Link } from '../../components/Link/Link';
import { Line } from '../../components/Line/Line';
import { ScreenWrapper } from '../../components/ScreenWrapper/ScreenWrapper';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CompanyDto } from '../../services/types';
import instagram from '../../images/instagram.webp';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import linkedIn from '../../images/linkedIn.png';

type BusinessScreenProps = unknown;

export const BusinessScreen: React.FC<BusinessScreenProps> = () => {
  const [business, setBusiness] = useState<CompanyDto>(templateBusiness);

  const { id } = useParams();

  const modifyBusinessLinks = (data: CompanyDto) => {
    if (data.instagram && !data.instagram.includes('https://')) {
      data.instagram = `https://${data.instagram}`;
    }
    if (data.facebook && !data.facebook.includes('https://')) {
      data.facebook = `https://${data.facebook}`;
    }
    if (data.twitter && !data.twitter.includes('https://')) {
      data.twitter = `https://${data.twitter}`;
    }
    if (data.linkedIn && !data.linkedIn.includes('https://')) {
      data.linkedIn = `https://${data.linkedIn}`;
    }
    if (data.otherSiteLink && !data.otherSiteLink.includes('https://')) {
      data.otherSiteLink = `https://${data.otherSiteLink}`;
    }
    if (data.web && !data.web.includes('https://')) {
      data.web = `https://${data.web}`;
    }
    setBusiness(data);
  };

  const getBusiness = () => {
    axios
      .get(`http://localhost:3000/companies/get/${id}`)
      .then(function (response) {
        if (response.data) {
          modifyBusinessLinks(response.data as CompanyDto);
        } else {
          console.log('NOT GOOD');
        }
      })
      .catch(function (error) {
        console.log('Error: ', error);
      });
  };

  useEffect(() => {
    console.log('ID: ', id);
    if (id) {
      getBusiness();
    }
  }, [id]);

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
            <div className={styles.mainNameAndTagsWrapper}>
              <div className={styles.profilePictureContainer}>
                <img
                  src={whiteImage}
                  alt="failedToRender"
                  className={styles.profilePictureStyle}
                />
              </div>
              <div className={styles.nameAndTagsWrapper}>
                <div className={styles.nameAndTagsContainer}>
                  <div className={styles.flexColumn}>
                    <Typography variant={'headingBold'}>
                      {business.name}
                    </Typography>
                    <Typography variant={'subHeadingBold'}>
                      {business.category}
                    </Typography>
                    <div className={styles.tagWrapper}>
                      {business.tags.map((tag) => (
                        <div className={styles.tagStyle}>
                          <Tag text={tag} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.socialMediaWrapper}>
                  {business.instagram && (
                    <div className={styles.socialMediaContainer}>
                      <a href={business.instagram}>
                        <img
                          src={instagram}
                          alt="failedToRender"
                          className={styles.socialMediaImageStyle}
                        />
                      </a>
                    </div>
                  )}
                  {business.facebook && (
                    <div className={styles.socialMediaContainer}>
                      <a href={business.facebook}>
                        <img
                          src={facebook}
                          alt="failedToRender"
                          className={styles.socialMediaImageStyle}
                        />
                      </a>
                    </div>
                  )}
                  {business.twitter && (
                    <div className={styles.socialMediaContainer}>
                      <a href={business.twitter}>
                        <img
                          src={twitter}
                          alt="failedToRender"
                          className={styles.socialMediaImageStyle}
                        />
                      </a>
                    </div>
                  )}
                  {business.linkedIn && (
                    <div className={styles.socialMediaContainer}>
                      <a href={business.linkedIn}>
                        <img
                          src={linkedIn}
                          alt="failedToRender"
                          className={styles.socialMediaImageStyle}
                        />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.mainDataWrapper}>
              <div style={{ marginBottom: '16px' }}>
                <Typography variant={'subHeadingBold'}>O biznisu</Typography>
              </div>
              <Typography variant={'bodyNormal'}>{business.about}</Typography>
              <div className={styles.lineContainer}>
                <Line />
              </div>
              <div style={{ marginBottom: '16px', marginTop: '36px' }}>
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
                      text={business.address}
                      secondText={business.zip}
                    />
                  </div>
                  <div style={{ marginBottom: '40px' }}>
                    <TitleAndText title="Grad:" text={business.city} />
                  </div>
                  <TitleAndText title="Država:" text={business.country} />
                </div>
                <div className={styles.informationContainerWithGap}>
                  <TitleAndText title="Telefon:" text={business.phone} />
                  <TitleAndText title="Email:" text={business.email} />
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '10px'
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <Typography variant="bodyBold">Web:</Typography>
                    </div>
                    <Link link={business.web} text="Our website" />
                  </div>
                </div>
                <div className={styles.informationContainer}>
                  <div style={{ marginBottom: '19px' }}>
                    <TitleAndText
                      title="Godina osnivanja:"
                      text={business.year.toString()}
                    />
                  </div>
                  <TitleAndText title="Program:" text={business.program} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ marginBottom: '26px' }}>
                    <Typography variant="bodyBold">Radno vrijeme:</Typography>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '5px'
                    }}
                  >
                    <TitleAndText
                      title="Ponedjeljak:"
                      text={business.monWorkTime}
                    />
                    <TitleAndText title="Utorak:" text={business.tueWorkTime} />
                    <TitleAndText
                      title="Srijeda:"
                      text={business.wedWorkTime}
                    />
                    <TitleAndText
                      title="Četvrtal:"
                      text={business.thuWorkTime}
                    />
                    <TitleAndText title="Petak:" text={business.friWorkTime} />
                    <Typography variant="bodyNormal">
                      Vikend i praznici neradni
                    </Typography>
                  </div>
                </div>
                {business.otherSiteLink && (
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
                      <Link text="Link 1" link={business.otherSiteLink} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScreenWrapper>
  );
};
