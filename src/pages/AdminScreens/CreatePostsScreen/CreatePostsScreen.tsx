import React, { useEffect, useState } from 'react';
import styles from './CreatePostsScreenStyles.module.css';
import { Typography } from '../../../components/Typography/Typography';
import { Button } from '../../../components/Button/Button';
import { useForm } from 'react-hook-form';
import { ControlledInput } from '../../../components/Input/Input';
import { ControlledMultilineInput } from '../../../components/Input/Multiline/MultilineInput';
import plusCircle from '../../../images/plusCircle.svg';
import { ControlledSelect } from '../../../components/Select/Select';
import * as yup from 'yup';
import { CreatePostDto, Filters } from '../../../services/types';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { TOKEN } from '../../../services/token';
import { useNavigate } from 'react-router-dom';
import { ControlledImageInput } from '../../../components/CircularImage/CircularImage';
import { config } from '../../../config/config';
import _ from 'lodash';
import { templateFilters } from '../../../dummyData/DummyData';

type CreatePostProps = unknown;

const validationSchema = yup.object().shape({
  title: yup.string().required('Ovo polje je obavezno!'),
  text: yup.string().required('Ovo polje je obavezno!'),
  category: yup.string().required('Ovo polje je obavezno!'),
  imageUrl: yup.string().required('Ovo polje je obavezno!')
});

export const CreatePostsScreen: React.FC<CreatePostProps> = () => {
  const { control, handleSubmit } = useForm<CreatePostDto>({
    resolver: yupResolver(validationSchema)
  });

  const [headerImageFile, setHeaderImageFile] = useState<File>();

  const navigate = useNavigate();

  const onSubmit = (data: CreatePostDto) => {
    const dataToSend = {
      ...data,
      imageUrl: newsPictureId
    };
    axios
      .post('http://localhost:3000/news', dataToSend, {
        headers: { Authorization: `Bearer ${TOKEN.get()}` }
      })
      .then(function (response) {
        if (response.data) {
          navigate('/vijesti');
        } else {
          console.log('NOT GOOD');
        }
      })
      .catch(function (error) {
        console.log('Error: ', error);
      });
  };

  const [filtersData, setFiltersData] = useState<Filters>(templateFilters);

  const getFilters = () => {
    axios
      .get(`${config.API_URL}filters`)
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

  useEffect(() => {
    getFilters();
  }, []);

  const [newsPictureId, setNewsPictureId] = useState<string>();

  useEffect(() => {
    if (headerImageFile) {
      const formData = new FormData();
      formData.append('image', headerImageFile);

      axios
        .post('http://localhost:3000/image/upload', formData, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data'
          },
          params: {
            prefix: 'news'
          }
        })
        .then(function (response) {
          if (response) {
            setNewsPictureId(response.data._id);
          } else {
            console.log('NOT GOOD');
          }
        })
        .catch(function (error) {
          console.log('Error: ', error);
        });
    }
  }, [headerImageFile]);

  return (
    <div className={styles.mainContainer}>
      <Typography variant={'headingBold'}>Admin Panel</Typography>
      <div className={styles.businessWrapper}>
        <ControlledInput
          control={control}
          name={'title'}
          label="Naslov objave"
          customStyle={{
            padding: '23px 32px'
          }}
        />
        <ControlledMultilineInput
          control={control}
          name={'text'}
          label="Unesite text"
          characterLimit={5000}
          rows={20}
          customStyle={{
            padding: '20px 15px',
            borderRadius: '23px'
          }}
        />
        <div style={{ width: '300px' }}>
          <ControlledSelect
            control={control}
            name="category"
            label="Kategorije"
            options={filtersData.categories.map((category) => ({
              label: _.capitalize(category),
              value: category
            }))}
          />
        </div>
        <div className={styles.profilePictureContainer}>
          <div className={styles.addProfileTextContainer}>
            <Typography variant={'bodyNormal'}>Dodaj sliku</Typography>
          </div>
          <div className={styles.profilePicture}>
            <ControlledImageInput
              control={control}
              name={'imageUrl'}
              borderRadius="10px"
              onFileChange={(file) => setHeaderImageFile(file)}
            />
          </div>
        </div>
      </div>
      <Button
        text="Kreiraj objavu"
        onClick={handleSubmit(onSubmit)}
        variant="filled"
      />
    </div>
  );
};
