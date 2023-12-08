import React from 'react';
import { useForm } from 'react-hook-form';
import { ControlledInput } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { ImageWithText } from '../../components/ImageWithText/ImageWithText';
import blankImage from '../../images/blankImage.png';
import { newsMainText, secondaryNews } from '../../dummyData/DummyData';
import { ScreenWrapper } from '../../components/ScreenWrapper/ScreenWrapper';
import styles from './NewsScreenStyles.module.css';
import { Typography } from '../../components/Typography/Typography';

type NewsScreenProps = unknown;

export const NewsScreen: React.FC<NewsScreenProps> = () => {
  const { control, handleSubmit } = useForm<any>({
    // resolver: yupResolver(validationSchema)
  });

  return (
    <ScreenWrapper>
      <div className={styles.newsWrapper}>
        <div className={styles.searchWrapper}>
          <div className={styles.searchTextWrapper}>
            <Typography variant={'headingBold'}>Vijesti</Typography>
          </div>
          <div className={styles.searchInputWrapper}>
            <div className={styles.searchInputContainer}>
              <ControlledInput
                control={control}
                name="search"
                inputType={'search'}
                label="Ukucaj pojam, kategoriju, servis ili naziv..."
              />
            </div>
            <Button
              text="Pretraži"
              variant={'outlined'}
              onClick={() => {}}
              textVariant={'smallButtonText'}
            />
          </div>
        </div>
        <div className={styles.mainImageWrapper}>
          <div className={styles.mainImage}>
            <ImageWithText
              header="Lorem ipsum dolor sit amet, consectetur adipiscing"
              subtitle="Kategorija"
              image={blankImage}
            />
          </div>
          <div className={styles.mainTextWrapper}>
            {newsMainText.map((text, index) => (
              <div className={styles.textWrapper}>
                <div className={styles.subHeadingBold}>{index + 1}</div>
                <div className={styles.subHeadingBold}>{text.text}</div>
              </div>
            ))}
          </div>
        </div>
        {secondaryNews.map((news) => (
          <div className={styles.secondaryNewsWrapper}>
            <img
              src={blankImage}
              alt="failedToRender"
              className={styles.secondaryImage}
            />
            <div className={styles.secondaryNewsMainWrapper}>
              <div className={styles.dateAndAuthorWrapper}>
                <div className={styles.bodyMedium}>{news.date}</div>
                <div className={styles.straightLine}>
                  <div className={styles.bodyMedium}>|</div>
                </div>
                <div className={styles.authorContainer}>
                  <div className={styles.bodyBold}>Autor:</div>
                  <div className={styles.bodyMedium}>{news.author}</div>
                </div>
              </div>
              <div className={styles.secondaryNewsTextWrapper}>
                <div className={styles.headingBold}>{news.text}</div>
              </div>
              <div className={styles.categoryWrapper}>
                <div className={styles.bodyMedium}>Kategorija</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScreenWrapper>
  );
};
