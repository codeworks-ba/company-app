import React, { useEffect, useState } from 'react';
import { ScreenWrapper } from '../../components/ScreenWrapper/ScreenWrapper';
import styles from './ReadPostScreenStyles.module.css';
import blankImage from '../../images/blankImage.png';
import { Typography } from '../../components/Typography/Typography';
import { useParams } from 'react-router-dom';
import { AuthUser, NewsDto } from '../../services/types';
import { templateStory } from '../../dummyData/DummyData';
import axios from 'axios';
import { formatDate } from '../../services/dayjs';

type ReadPostProps = unknown;

export const ReadPostScreen: React.FC<ReadPostProps> = () => {
  const [news, setNews] = useState<NewsDto>(templateStory);

  const { id } = useParams();

  const getNewsArticle = () => {
    axios
      .get(`http://localhost:3000/news/get/${id}`)
      .then(function (response) {
        if (response.data) {
          setNews(response.data as NewsDto);
        } else {
          console.log('NOT GOOD');
        }
      })
      .catch(function (error) {
        console.log('Error: ', error);
      });
  };

  useEffect(() => {
    getNewsArticle();
  }, []);

  return (
    <ScreenWrapper>
      <div className={styles.newsWrapper}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px'
          }}
        >
          <Typography variant="headingBold">{news.title}</Typography>
        </div>
        <div className={styles.mainContainer}>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '30px'
            }}
          >
            <img src={news.imageUrl} alt="" className={styles.imageStyle} />
            <div className={styles.postDataContainer}>
              <Typography variant="subHeadingNormal">
                <b>Autor: </b>
                {(news.userId as unknown as AuthUser).firstName}{' '}
                {(news.userId as unknown as AuthUser).lastName}
              </Typography>
              <Typography variant="subHeadingNormal">
                <b>Kategorija: </b>
                {news.category}
              </Typography>
              <Typography variant="subHeadingNormal">
                <b>Objavljeno: </b>
                {formatDate(news.createdAt)}
              </Typography>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              alignItems: 'center',
              textAlign: 'justify'
            }}
          >
            <Typography variant="subHeadingNormal">{news.text}</Typography>
          </div>
        </div>
      </div>
    </ScreenWrapper>
  );
};
