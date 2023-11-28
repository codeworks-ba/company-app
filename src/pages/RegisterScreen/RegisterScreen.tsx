import React, { useState } from 'react';
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
import { ControlledRadioInput } from '../../components/Input/RadioInput/RadioInput';

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
  const [mailRadioSelected, setMailRadioSelected] = useState<boolean>(false);
  const [addressRadioSelected, setAddressRadioSelected] =
    useState<boolean>(false);
  const [telRadioSelected, setTelRadioSelected] = useState<boolean>(false);

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
        <Typography variant={'headingBold'}>Kreirajmo tvoj profil!</Typography>
      </div>
      <div style={styles.flexColumn}>
        <div style={styles.flexRowWithGap60}>
          <div style={styles.profilePictureContainer}>
            <div style={{ width: '100%' }}>
              <Typography variant={'bodyNormal'}>
                Dodaj sliku profila
              </Typography>
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
          <div style={styles.flexColumn}>
            <div style={styles.alignStart}>
              <Typography variant={'bodyNormal'}>
                Osnovne informacije
              </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                marginTop: '12px'
              }}
            >
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
            <div style={{ width: '100%', marginBottom: '12px' }}>
              <ControlledDatePicker
                control={control}
                name={'dateOfBirth'}
                label="Datum rođenja"
              />
            </div>
            <div style={styles.flexRowWithGap10}>
              <div style={{ flex: 1 }}>
                <ControlledRadioInput
                  control={control}
                  name={'email'}
                  label="Email adresa"
                  onRadioPress={(value) => {
                    setMailRadioSelected(value);
                  }}
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
        <div style={{ width: '100%', marginTop: '12px' }}>
          <ControlledMultilineInput
            label="Kratka biografija"
            rows={6}
            control={control}
            name={'bio'}
            characterLimit={240}
          />
        </div>
        <div style={{ marginTop: '12px' }}>
          <div style={styles.flexRowWithGap10}>
            <div style={{ flex: 1 }}>
              <ControlledRadioInput
                control={control}
                name={'address'}
                label="Adresa"
                onRadioPress={(value) => {
                  setAddressRadioSelected(value);
                }}
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
        <div>
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
              <ControlledRadioInput
                control={control}
                name={'phone'}
                label="Telefon"
                onRadioPress={(value) => {
                  setTelRadioSelected(value);
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: '12px',
            borderRadius: '25px',
            backgroundColor: '#E0F3F7',
            padding: '14px 24px'
          }}
        >
          <Typography variant="bodyNormal">
            {
              <div style={{ color: '#787878' }}>
                <b>NAPOMENA:</b> U skladu sa zakonima o ličnim podacima online,
                u predviđenim poljima označenim sa plavim krugom možete ukloniti
                prikaz ovih informacija javno. Ovu opciju možete uvijek naknadno
                mijenjati u postavkama profila.
              </div>
            }
          </Typography>
        </div>
      </div>
      <div style={{ marginTop: 30, marginBottom: '46px' }}>
        <Button
          text={'Kreiraj akaunt'}
          onClick={handleSubmit(onSubmit)}
          variant={'filled'}
        />
      </div>
    </div>
  );
};
