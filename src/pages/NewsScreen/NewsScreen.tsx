import React from 'react';
import { styles } from './NewsScreen.styles';
import { Typography } from '../../components/Typography/Typography';
import { useForm } from 'react-hook-form';
import { ControlledInput } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { ImageWithText } from '../../components/ImageWithText/ImageWithText';
import blankImage from '../../images/blankImage.png';
import { newsMainText, secondaryNews } from '../../dummyData/DummyData';

type NewsScreenProps = unknown;

export const NewsScreen: React.FC<NewsScreenProps> = () => {
  const { control, handleSubmit } = useForm<any>({
    // resolver: yupResolver(validationSchema)
  });

  return (
    <div style={styles.newsWrapper}>
      <div style={{ width: '100%' }}>
        <div style={styles.searchWrapper}>
          <div style={{ display: 'flex', width: '30%' }}>
            <Typography variant={'headingBold'}>Vijesti</Typography>
          </div>
          <div style={styles.searchInputWrapper}>
            <div style={{ width: '70%' }}>
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
        <div style={styles.mainImageWrapper}>
          <div style={styles.mainImage}>
            <ImageWithText
              header="Lorem ipsum dolor sit amet, consectetur adipiscing"
              subtitle="Kategorija"
              image={blankImage}
            />
          </div>
          <div style={styles.mainTextWrapper}>
            {newsMainText.map((text, index) => (
              <div style={styles.textWrapper}>
                <Typography variant={'subHeadingBold'}>{index + 1}</Typography>
                <Typography variant={'subHeadingBold'}>{text.text}</Typography>
              </div>
            ))}
          </div>
        </div>
        {secondaryNews.map((news) => (
          <div style={styles.secondaryNewsWrapper}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <img
                src={blankImage}
                alt="failedToRender"
                style={styles.secondaryImage}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={styles.dateAndAuthorWrapper}>
                  <Typography variant={'bodyMedium'}>{news.date}</Typography>
                  <Typography variant={'bodyMedium'}>|</Typography>
                  <Typography variant={'bodyBold'}>Autor:</Typography>
                  <Typography variant={'bodyMedium'}>{news.author}</Typography>
                </div>
                <div style={styles.secondaryNewsTextWrapper}>
                  <Typography variant={'headingBold'}>{news.text}</Typography>
                </div>
                <div style={styles.categoryWrapper}>
                  <Typography variant={'bodyMedium'}>Kategorija</Typography>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
