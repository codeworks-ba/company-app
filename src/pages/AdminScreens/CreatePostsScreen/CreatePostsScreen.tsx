import React from 'react';
import styles from './CreatePostsScreenStyles.module.css';
import { Typography } from '../../../components/Typography/Typography';
import { Button } from '../../../components/Button/Button';
import { useForm } from 'react-hook-form';
import { ControlledInput } from '../../../components/Input/Input';
import { ControlledMultilineInput } from '../../../components/Input/Multiline/MultilineInput';
import plusCircle from '../../../images/plusCircle.svg';
import { ControlledSelect } from '../../../components/Select/Select';
import * as yup from 'yup';
import { CreatePostDto } from '../../../services/types';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { TOKEN } from '../../../services/token';
import { useNavigate } from 'react-router-dom';

type CreatePostProps = unknown;

const validationSchema = yup.object().shape({
  title: yup.string().required('Ovo polje je obavezno!'),
  text: yup.string().required('Ovo polje je obavezno!'),
  category: yup.string().required('Ovo polje je obavezno!')
});

export const CreatePostsScreen: React.FC<CreatePostProps> = () => {
  const { control, handleSubmit } = useForm<CreatePostDto>({
    resolver: yupResolver(validationSchema)
  });

  const navigate = useNavigate();

  const onSubmit = (data: CreatePostDto) => {
    axios
      .post('http://localhost:3000/news', data, {
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

  const image = null;
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
            name={'category'}
            control={control}
            label="Kategorija objave"
            options={[
              { label: 'Ten', value: 10 },
              { label: 'Twenty', value: 20 },
              { label: 'Thirty', value: 30 }
            ]}
          />
        </div>
        <div className={styles.profilePictureContainer}>
          <div className={styles.addProfileTextContainer}>
            <Typography variant={'bodyNormal'}>Dodaj sliku</Typography>
          </div>
          <div className={styles.profilePicture}>
            {image ? (
              <img
                src={image}
                alt=""
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover'
                }}
              />
            ) : (
              <img src={plusCircle} alt="" style={{ height: 80, width: 80 }} />
            )}
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
