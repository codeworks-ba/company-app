import React from 'react';
import { Typography } from '../../components/Typography/Typography';
import plusCircle from '../../images/plusCircle.svg';
import { ControlledInput } from '../../components/Input/Input';
import { useForm } from 'react-hook-form';
import { CreateUserDto } from '../../services/types';
import { ControlledDatePicker } from '../../components/DatePicker/DatePicker';
import { ControlledMultilineInput } from '../../components/Input/Multiline/MultilineInput';
import { Button } from '../../components/Button/Button';
import * as yup from 'yup';
import axios from 'axios';
import { styles } from './RegisterScreen.styles';
import { yupResolver } from '@hookform/resolvers/yup';

type RegisterScreenProps = unknown;

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Use correct email format!')
    .required('This field is required!'),
  firstName: yup.string().required('This field is required!'),
  lastName: yup.string().required('This field is required!'),
  bio: yup.string().required('This field is required!'),
  city: yup.string().required('This field is required!'),
  address: yup.string().required('This field is required!'),
  phone: yup.string().required('This field is required!'),
  password: yup.string().required('This field is required!'),
  occupation: yup.string().required('This field is required!'),
  dateOfBirth: yup.date().required('This field is required!')
});

export const RegisterScreen: React.FC<RegisterScreenProps> = () => {
  const { control, handleSubmit } = useForm<CreateUserDto>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: CreateUserDto) => {
    console.log('DATA: ', data);
    axios
      .post('http://localhost:3000/auth/', data)
      .then(function (response) {
        if (response.data.user) {
          console.log('GOOD: ', response.data);
        } else {
          console.log('NOT GOOD');
        }
      })
      .catch(function (error) {
        console.log('Error');
      });
  };

  const image = null;
  return (
    <div style={styles.mainContainer}>
      <div style={styles.headerContainer}>
        <Typography>Kreirajmo tvoj profil!</Typography>
      </div>
      <div style={styles.flexColumn}>
        <div style={styles.flexRowWithGap20}>
          <div style={styles.profilePictureContainer}>
            <div style={{ width: '100%' }}>
              <Typography>Dodaj sliku profila</Typography>
            </div>
            <div style={styles.profilePicture}>
              {image ? (
                <img
                  src={image}
                  alt=""
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'contain'
                  }}
                />
              ) : (
                <img
                  src={plusCircle}
                  alt=""
                  style={{ height: 80, width: 80 }}
                />
              )}
            </div>
          </div>
          <div style={styles.flexColumnWithGap}>
            <div style={styles.alignStart}>
              <Typography>Dodaj naslovnu sliku</Typography>
            </div>
            <div style={styles.flexRowWithGap10}>
              <div style={{ flex: 1 }}>
                <ControlledInput
                  control={control}
                  name={'firstName'}
                  label="Ime"
                  inputType={'input'}
                />
              </div>
              <div style={{ flex: 1 }}>
                <ControlledInput
                  control={control}
                  name={'lastName'}
                  label="Prezime"
                  inputType={'input'}
                />
              </div>
            </div>
            <div style={{ width: '100%' }}>
              <ControlledDatePicker
                control={control}
                name={'dateOfBirth'}
                label="Datum rođenja"
              />
            </div>
            <div style={styles.flexRowWithGap10}>
              <div style={{ flex: 1 }}>
                <ControlledInput
                  control={control}
                  name={'email'}
                  label="Email adresa"
                  inputType={'input'}
                />
              </div>
              <div style={{ flex: 1 }}>
                <ControlledInput
                  control={control}
                  name={'password'}
                  label="Password"
                  inputType={'input'}
                />
              </div>
            </div>
          </div>
        </div>
        <div style={styles.headerImageText}>
          <Typography>Dodaj naslovnu sliku</Typography>
        </div>
        <div style={styles.headerImageContainer}>
          {image ? (
            <img src={image} alt="" style={styles.headerImage} />
          ) : (
            <img src={plusCircle} alt="" style={{ height: 80, width: 80 }} />
          )}
        </div>
        <div style={{ width: '100%', marginTop: 15 }}>
          <ControlledMultilineInput
            label="Kratka biografija"
            rows={6}
            control={control}
            name={'bio'}
            characterLimit={240}
          />
        </div>
        <div style={{ marginTop: 15 }}>
          <div style={styles.flexRowWithGap10}>
            <div style={{ flex: 1 }}>
              <ControlledInput
                control={control}
                name={'address'}
                label="Adresa"
                inputType={'input'}
              />
            </div>
            <div style={{ flex: 1 }}>
              <ControlledInput
                control={control}
                name={'city'}
                label="Grad"
                inputType={'input'}
              />
            </div>
          </div>
        </div>
        <div style={{ marginTop: 15 }}>
          <div style={styles.flexRowWithGap10}>
            <div style={{ flex: 1 }}>
              <ControlledInput
                control={control}
                name={'occupation'}
                label="Zanimanje"
                inputType={'input'}
              />
            </div>
            <div style={{ flex: 1 }}>
              <ControlledInput
                control={control}
                name={'phone'}
                label="Telefon"
                inputType={'input'}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 30 }}>
        <Button
          text={'Kreiraj akaunt'}
          onClick={handleSubmit(onSubmit)}
          variant={'filled'}
        />
      </div>
    </div>
  );
};
