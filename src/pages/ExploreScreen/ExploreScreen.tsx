import React, { useEffect, useState } from 'react';
import styles from './ExploreScreenStyles.module.css';
import { Typography } from '../../components/Typography/Typography';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button/Button';
import { ImageCard } from '../../components/ImageCard/ImageCard';
import blankImage from '../../images/blankImage.png';
import filterLogo from '../../images/filter.svg';
import { templateFilterData, templateFilters } from '../../dummyData/DummyData';
import { useNavigate } from 'react-router-dom';
import { ScreenWrapper } from '../../components/ScreenWrapper/ScreenWrapper';
import { ControlledSearchInput } from '../../components/Input/Search/SearchInput';
import {
  CompanyDto,
  Filters,
  PaginatedCompanyDto,
  SearchWithFilters
} from '../../services/types';
import axios from 'axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ControlledAutocomplete } from '../../components/Autocomplete/Autocomplete';
import _ from 'lodash';

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
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [filtersData, setFiltersData] = useState<Filters>(templateFilters);

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
          tag: filters.tag,
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
            setIsFilterOpen(false);
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

  const getFilters = () => {
    axios
      .get('http://localhost:3000/filters')
      .then(function (response) {
        if (response.data) {
          setFiltersData(response.data);
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
    getFilters();
  }, [businesses]);

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
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <div
                className={styles.filterContainer}
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <img
                  src={filterLogo}
                  alt="filter"
                  style={{ height: '30px', width: '30px' }}
                />
                <Typography variant={'bodySmall'}>FILTERI</Typography>
              </div>
              {isFilterOpen && (
                <div
                  style={{
                    width: '150px',
                    backgroundColor: '#ebebeb',
                    border: '1px solid #D4D4D4',
                    borderRadius: '23px',
                    zIndex: 999,
                    position: 'absolute',
                    top: '35px',
                    left: '-85px',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px',
                    gap: '10px'
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      backgroundColor: 'white',
                      borderRadius: '20px'
                    }}
                  >
                    <ControlledAutocomplete
                      control={control}
                      name="category"
                      label="Kategorije"
                      options={filtersData.categories.map((category) => ({
                        label: _.capitalize(category),
                        value: category
                      }))}
                    />
                  </div>
                  <div
                    style={{
                      width: '100%',
                      backgroundColor: 'white',
                      borderRadius: '20px'
                    }}
                  >
                    <ControlledAutocomplete
                      control={control}
                      name="service"
                      label="Usluga"
                      options={[
                        { label: 'Ten', value: '10' },
                        { label: 'Twenty', value: '20' },
                        { label: 'Thirty', value: '30' }
                      ]}
                    />
                  </div>
                  <div
                    style={{
                      width: '100%',
                      backgroundColor: 'white',
                      borderRadius: '20px'
                    }}
                  >
                    <ControlledAutocomplete
                      control={control}
                      name="tag"
                      label="Tag"
                      options={filtersData.tags.map((tag) => ({
                        label: _.capitalize(tag),
                        value: tag
                      }))}
                    />
                  </div>
                  <div
                    style={{
                      width: '100%',
                      backgroundColor: 'white',
                      borderRadius: '20px'
                    }}
                  >
                    <ControlledAutocomplete
                      control={control}
                      name="city"
                      label="Grad"
                      options={filtersData.cities.map((city) => ({
                        label: _.capitalize(city),
                        value: city
                      }))}
                    />
                  </div>
                  <div
                    style={{
                      width: '100%',
                      backgroundColor: 'white',
                      borderRadius: '20px'
                    }}
                  >
                    <ControlledAutocomplete
                      control={control}
                      name="program"
                      label="Program"
                      options={filtersData.programs.map((program) => ({
                        label: _.capitalize(program),
                        value: program
                      }))}
                    />
                  </div>
                </div>
              )}
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
              <ControlledAutocomplete
                control={control}
                name="category"
                label="Kategorije"
                options={filtersData.categories.map((category) => ({
                  label: _.capitalize(category),
                  value: category
                }))}
              />
              <ControlledAutocomplete
                control={control}
                name="service"
                label="Usluga"
                options={[
                  { label: 'Ten', value: '10' },
                  { label: 'Twenty', value: '20' },
                  { label: 'Thirty', value: '30' }
                ]}
              />
              <ControlledAutocomplete
                control={control}
                name="tag"
                label="Tag"
                options={filtersData.tags.map((tag) => ({
                  label: _.capitalize(tag),
                  value: tag
                }))}
              />
              <ControlledAutocomplete
                control={control}
                name="city"
                label="Grad"
                options={filtersData.cities.map((city) => ({
                  label: _.capitalize(city),
                  value: city
                }))}
              />
              <ControlledAutocomplete
                control={control}
                name="program"
                label="Program"
                options={filtersData.programs.map((program) => ({
                  label: _.capitalize(program),
                  value: program
                }))}
              />
            </div>
          </div>
          <div className={styles.companyContainer}>
            {businesses.map((business) => (
              <div className={styles.imageCardStyle}>
                <ImageCard
                  image={business.logoImageUrl}
                  headerText={business.name}
                  subtitleText={_.capitalize(business.category)}
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
