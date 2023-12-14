import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button/Button';
import { ImageWithText } from '../../components/ImageWithText/ImageWithText';
import blankImage from '../../images/blankImage.png';
import { tempateNews } from '../../dummyData/DummyData';
import { ScreenWrapper } from '../../components/ScreenWrapper/ScreenWrapper';
import styles from './NewsScreenStyles.module.css';
import { Typography } from '../../components/Typography/Typography';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  AuthUser,
  NewsDto,
  PaginatedNewsDto,
  Search
} from '../../services/types';
import { formatDate } from '../../services/dayjs';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ControlledSearchInput } from '../../components/Input/Search/SearchInput';
import { AlertTriangle } from 'react-feather';

type NewsScreenProps = unknown;

const validationSchema = yup.object().shape({
  input: yup.string().optional()
});

export const NewsScreen: React.FC<NewsScreenProps> = () => {
  const { control, handleSubmit } = useForm<Search>({
    resolver: yupResolver(validationSchema)
  });

  const [newsArray, setNewsArray] = useState<NewsDto[]>(tempateNews);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [shouldHideMainNews, setShouldHideMainNews] = useState<boolean>(false);

  const navigate = useNavigate();

  const getUserCompanies = () => {
    axios
      .get('http://localhost:3000/news', {
        params: { sortBy: 'createdAt' }
      })
      .then(function (response) {
        if (response.data) {
          if ((response.data as PaginatedNewsDto).count < 1) {
            setIsEmpty(true);
          } else {
            setIsEmpty(false);
            setNewsArray((response.data as PaginatedNewsDto).data);
          }
        } else {
          console.log('NOT GOOD');
        }
      })
      .catch(function (error) {
        console.log('Error: ', error);
      });
  };

  const searchCompanies = (input: string) => {
    if (input === '') {
      setShouldHideMainNews(false);
    } else {
      setShouldHideMainNews(true);
    }

    axios
      .get('http://localhost:3000/news/search', {
        params: {
          sortBy: 'createdAt',
          title: input,
          text: input,
          category: input
        }
      })
      .then(function (response) {
        if (response.data) {
          if ((response.data as PaginatedNewsDto).count < 1) {
            setIsEmpty(true);
          } else {
            setIsEmpty(false);
            setNewsArray((response.data as PaginatedNewsDto).data);
          }
        } else {
          console.log('NOT GOOD');
        }
      })
      .catch(function (error) {
        console.log('Error: ', error);
      });
  };

  useEffect(() => {
    getUserCompanies();
  }, []);

  const onSubmit = (search: Search) => {
    searchCompanies(search.input ?? '');
  };

  return (
    <ScreenWrapper>
      <div className={styles.newsWrapper}>
        <div className={styles.searchWrapper}>
          <div className={styles.searchTextWrapper}>
            <Typography variant={'headingBold'}>Vijesti</Typography>
          </div>
          <div className={styles.searchInputWrapper}>
            <div className={styles.searchInputContainer}>
              <ControlledSearchInput
                control={control}
                name={'input'}
                label="Ukucaj pojam, kategoriju, servis ili naziv..."
              />
            </div>
            <Button
              text="Pretraži"
              variant={'outlined'}
              onClick={handleSubmit(onSubmit)}
              textVariant={'smallButtonText'}
            />
          </div>
        </div>
        {isEmpty ? (
          <div
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              gap: '20px'
            }}
          >
            <AlertTriangle size={'50px'} />
            <Typography variant={'headingBold'}>
              Nismo mogli naći objave po vašoj pretrazi!
            </Typography>
          </div>
        ) : (
          <>
            {!shouldHideMainNews && (
              <div className={styles.mainImageWrapper}>
                <div
                  className={styles.mainImage}
                  onClick={() => navigate(`${newsArray[0]._id}`)}
                >
                  <ImageWithText
                    header={newsArray[0].title}
                    subtitle={newsArray[0].category}
                    image={blankImage}
                  />
                </div>
                <div className={styles.mainTextWrapper}>
                  {newsArray.map((data, index) => (
                    <div
                      className={styles.textWrapper}
                      onClick={() => navigate(`${data._id}`)}
                    >
                      <div className={styles.subHeadingBold}>{index + 1}</div>
                      <div className={styles.subHeadingBold}>{data.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {newsArray.map((news) => (
              <div className={styles.secondaryNewsWrapper}>
                <img
                  src={blankImage}
                  alt="failedToRender"
                  className={styles.secondaryImage}
                  onClick={() => navigate(`${news._id}`)}
                />
                <div className={styles.secondaryNewsMainWrapper}>
                  <div className={styles.dateAndAuthorWrapper}>
                    <div className={styles.bodyMedium}>
                      {formatDate(news.createdAt)}
                    </div>
                    <div className={styles.straightLine}>
                      <div className={styles.bodyMedium}>|</div>
                    </div>
                    <div className={styles.authorContainer}>
                      <div className={styles.bodyBold}>Autor:</div>
                      <div className={styles.bodyMedium}>{`${
                        (news.userId as unknown as AuthUser).firstName
                      } ${(news.userId as unknown as AuthUser).lastName}`}</div>
                    </div>
                  </div>
                  <div
                    className={styles.secondaryNewsTextWrapper}
                    onClick={() => navigate(`${news._id}`)}
                  >
                    <div className={styles.headingBold}>{news.title}</div>
                  </div>
                  <div className={styles.categoryWrapper}>
                    <div className={styles.bodyMedium}>{news.category}</div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </ScreenWrapper>
  );
};
