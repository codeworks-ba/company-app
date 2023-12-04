import React, { useContext, useState } from 'react';
import { Typography } from '../../components/Typography/Typography';
import plusCircle from '../../images/plusCircle.svg';
import { ControlledInput } from '../../components/Input/Input';
import { useForm } from 'react-hook-form';
import { CreateUserDto } from '../../services/types';
import { ControlledDatePicker } from '../../components/DatePicker/DatePicker';
import { ControlledMultilineInput } from '../../components/Input/Multiline/MultilineInput';
import { Button } from '../../components/Button/Button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ControlledRadioInput } from '../../components/Input/RadioInput/RadioInput';
import { AuthContext } from '../../providers/auth/authContext';
import styles from './RegisterScreenStyles.module.css';

type RegisterScreenProps = unknown;

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Molimo koristite ispravan email format!')
    .required('Ovo polje je obavezno!'),
  firstName: yup.string().required('Ovo polje je obavezno!'),
  lastName: yup.string().required('Ovo polje je obavezno!'),
  bio: yup.string().optional(),
  city: yup.string().required('Ovo polje je obavezno!'),
  address: yup.string().required('Ovo polje je obavezno!'),
  phone: yup.string().required('Ovo polje je obavezno!'),
  password: yup.string().required('Ovo polje je obavezno!'),
  occupation: yup.string().required('Ovo polje je obavezno!'),
  dateOfBirth: yup.date().required('Ovo polje je obavezno!'),
  shouldHideEmail: yup.boolean().optional(),
  shouldHideAddress: yup.boolean().optional(),
  shouldHidePhone: yup.boolean().optional()
});

export const RegisterScreen: React.FC<RegisterScreenProps> = () => {
  const [mailRadioSelected, setMailRadioSelected] = useState<boolean>(false);
  const [addressRadioSelected, setAddressRadioSelected] =
    useState<boolean>(false);
  const [telRadioSelected, setTelRadioSelected] = useState<boolean>(false);

  const { signUp } = useContext(AuthContext);

  const { control, handleSubmit } = useForm<CreateUserDto>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: CreateUserDto) => {
    console.log('DATA: ', data);
    const userData: CreateUserDto = {
      ...data,
      shouldHideAddress: addressRadioSelected,
      shouldHideEmail: mailRadioSelected,
      shouldHidePhone: telRadioSelected
    };
    signUp(userData);
  };

  const image = null;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <Typography variant={'headingBold'}>Kreirajmo tvoj profil!</Typography>
      </div>
      <div className={styles.flexColumn}>
        <div className={styles.flexRowWithGap60}>
          <div className={styles.profilePictureContainer}>
            <div style={{ width: '100%' }}>
              <Typography variant={'bodyNormal'}>
                Dodaj sliku profila
              </Typography>
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
                <img
                  src={plusCircle}
                  alt=""
                  style={{ height: 80, width: 80 }}
                />
              )}
            </div>
          </div>
          <div className={styles.flexColumn}>
            <div className={styles.alignStart}>
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
            <div className={styles.flexRowWithGap10}>
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
                  textType={'password'}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.headerImageText}>
          <Typography>Dodaj naslovnu sliku</Typography>
        </div>
        <div className={styles.headerImageContainer}>
          {image ? (
            <img src={image} alt="" className={styles.headerImage} />
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
          <div className={styles.flexRowWithGap10}>
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
          <div className={styles.flexRowWithGap10}>
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
