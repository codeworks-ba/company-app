import React from 'react';
import styles from './ExploreScreenStyles.module.css';
import { Typography } from '../../components/Typography/Typography';
import { useForm } from 'react-hook-form';
import { ControlledInput } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { ControlledSelect } from '../../components/Select/Select';
import { ImageCard } from '../../components/ImageCard/ImageCard';
import blankImage from '../../images/blankImage.png';
import filterLogo from '../../images/filter.svg';
import { companies } from '../../dummyData/DummyData';
import { useNavigate } from 'react-router-dom';
import { ScreenWrapper } from '../../components/ScreenWrapper/ScreenWrapper';

type ExploreScreenProps = unknown;

export const ExploreScreen: React.FC<ExploreScreenProps> = () => {
  const { control, handleSubmit } = useForm<any>({
    // resolver: yupResolver(validationSchema)
  });

  const navigate = useNavigate();

  return (
    <ScreenWrapper>
      <div className={styles.mainContainer}>
        <div className={styles.searchWrapper}>
          <div className={styles.textAndFilterContainer}>
            <div className={styles.textContainer}>
              <Typography variant={'headingBold'}>Pretraga</Typography>
            </div>
            <div className={styles.filterContainer}>
              <img
                src={filterLogo}
                alt="filter"
                style={{ height: '30px', width: '30px' }}
              />
              <Typography variant={'bodySmall'}>FILTERI</Typography>
            </div>
          </div>
          <div className={styles.searchInputWrapper}>
            <div className={styles.searchContainer}>
              <ControlledInput
                label="Ukucaj pojam, kategoriju, servis ili naziv..."
                control={control}
                name="search"
                inputType={'search'}
              />
            </div>
            <Button
              text="Pretraži"
              onClick={() => {}}
              variant={'outlined'}
              textVariant={'smallButtonText'}
            />
          </div>
        </div>
        <div className={styles.filterAndCompanyWrapper}>
          <div className={styles.leftFiltersContainer}>
            <div style={{ marginBottom: '31px' }}>
              <Typography variant={'subHeadingBold'}>Filteri</Typography>
            </div>
            <div className={styles.flexColumn}>
              <ControlledSelect
                control={control}
                name="kategorije"
                label="Kategorije"
                options={[
                  { label: 'Ten', value: 10 },
                  { label: 'Twenty', value: 20 },
                  { label: 'Thirty', value: 30 }
                ]}
              />
              <ControlledSelect
                control={control}
                name="usluga"
                label="Usluga"
                options={[
                  { label: 'Ten', value: 10 },
                  { label: 'Twenty', value: 20 },
                  { label: 'Thirty', value: 30 }
                ]}
              />
              <ControlledSelect
                control={control}
                name="tag"
                label="Tag"
                options={[
                  { label: 'Ten', value: 10 },
                  { label: 'Twenty', value: 20 },
                  { label: 'Thirty', value: 30 }
                ]}
              />
              <ControlledSelect
                control={control}
                name="grad"
                label="Grad"
                options={[
                  { label: 'Ten', value: 10 },
                  { label: 'Twenty', value: 20 },
                  { label: 'Thirty', value: 30 }
                ]}
              />
              <ControlledSelect
                control={control}
                name="program"
                label="Program"
                options={[
                  { label: 'Ten', value: 10 },
                  { label: 'Twenty', value: 20 },
                  { label: 'Thirty', value: 30 }
                ]}
              />
            </div>
          </div>
          <div className={styles.companyContainer}>
            {companies.map((company) => (
              <div className={styles.imageCardStyle}>
                <ImageCard
                  image={blankImage}
                  headerText={company.header}
                  subtitleText={company.subtitle}
                  onClick={() => navigate('/biznis')}
                  type={'headerAndSubtitle'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScreenWrapper>
  );
};
