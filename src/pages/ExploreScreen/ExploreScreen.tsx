import React, { useEffect, useState } from 'react';
import styles from './ExploreScreenStyles.module.css';
import { Typography } from '../../components/Typography/Typography';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button/Button';
import { ControlledSelect } from '../../components/Select/Select';
import { ImageCard } from '../../components/ImageCard/ImageCard';
import blankImage from '../../images/blankImage.png';
import filterLogo from '../../images/filter.svg';
import { companies, templateFilterData } from '../../dummyData/DummyData';
import { useNavigate } from 'react-router-dom';
import { ScreenWrapper } from '../../components/ScreenWrapper/ScreenWrapper';
import { ControlledSearchInput } from '../../components/Input/Search/SearchInput';
import {
  CompanyDto,
  PaginatedCompanyDto,
  Search,
  SearchWithFilters
} from '../../services/types';
import axios from 'axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type ExploreScreenProps = unknown;

const validationSchema = yup.object().shape({
  input: yup.string().optional(),
  category: yup.string().optional(),
  service: yup.string().optional(),
  tag: yup.string().optional(),
  city: yup.string().optional(),
  program: yup.string().optional()
});

export const ExploreScreen: React.FC<ExploreScreenProps> = () => {
  const { control, handleSubmit, watch } = useForm<SearchWithFilters>({
    resolver: yupResolver(validationSchema)
  });

  const [businesses, setBusinesses] = useState<CompanyDto[]>([]);
  const [filters, setFilters] = useState<SearchWithFilters>(templateFilterData);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  const navigate = useNavigate();

  const getVerifiedCompanies = () => {
    axios
      .get('http://localhost:3000/companies', {
        params: { status: 'approved', sortBy: 'createdAt' }
      })
      .then(function (response) {
        if (response.data) {
          setBusinesses((response.data as PaginatedCompanyDto).data);
        } else {
          console.log('NOT GOOD');
        }
      })
      .catch(function (error) {
        console.log('Error: ', error);
      });
  };

  const searchCompanies = () => {
    axios
      .get('http://localhost:3000/companies/search', {
        params: {
          status: 'approved',
          sortBy: 'createdAt',
          category: filters.category,
          name: filters.input,
          tags: filters.tag,
          program: filters.program,
          address: filters.input,
          country: filters.input,
          city: filters.city
        }
      })
      .then(function (response) {
        if (response.data) {
          if ((response.data as PaginatedCompanyDto).count < 1) {
            setIsEmpty(true);
            setBusinesses([]);
          } else {
            setIsEmpty(false);
            setBusinesses((response.data as PaginatedCompanyDto).data);
          }
        } else {
          console.log('NOT GOOD');
        }
      })
      .catch(function (error) {
        console.log('Error: ', error);
      });
  };

  const onSubmit = (search: SearchWithFilters) => {
    setFilters((oldVal) => {
      return { ...oldVal, input: search.input ?? '' };
    });
  };

  useEffect(() => {
    getVerifiedCompanies();
  }, []);

  useEffect(() => {
    searchCompanies();
  }, [filters]);

  const category = watch('category');

  useEffect(() => {
    setFilters((oldVal) => {
      return { ...oldVal, category: category };
    });
  }, [category]);

  const service = watch('service');

  useEffect(() => {
    setFilters((oldVal) => {
      return { ...oldVal, service: service };
    });
  }, [service]);

  const tag = watch('tag');

  useEffect(() => {
    setFilters((oldVal) => {
      return { ...oldVal, tag: tag };
    });
  }, [tag]);

  const city = watch('city');

  useEffect(() => {
    setFilters((oldVal) => {
      return { ...oldVal, city: city };
    });
  }, [city]);

  const program = watch('program');

  useEffect(() => {
    setFilters((oldVal) => {
      return { ...oldVal, program: program };
    });
  }, [program]);

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
              <ControlledSearchInput
                label="Ukucaj pojam, kategoriju, servis ili naziv..."
                control={control}
                name="input"
              />
            </div>
            <Button
              text="Pretraži"
              onClick={handleSubmit(onSubmit)}
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
                name="category"
                label="Kategorije"
                options={[
                  { label: 'Ten', value: 10 },
                  { label: 'Twenty', value: 20 },
                  { label: 'Thirty', value: 30 }
                ]}
              />
              <ControlledSelect
                control={control}
                name="service"
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
                name="city"
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
            {businesses.map((business) => (
              <div className={styles.imageCardStyle}>
                <ImageCard
                  image={blankImage}
                  headerText={business.name}
                  subtitleText={business.category}
                  onClick={() => navigate(`/biznis/${business._id}`)}
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
