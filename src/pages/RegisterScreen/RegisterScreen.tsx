import React, { useContext, useEffect, useRef, useState } from 'react';
import { Typography } from '../../components/Typography/Typography';
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
import { ControlledImageInput } from '../../components/CircularImage/CircularImage';
import { RadioButton } from '../../components/RadioButton/RadioButton';
import axios from 'axios';

type RegisterScreenProps = unknown;

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Molimo koristite ispravan email format!')
    .required('Ovo polje je obavezno!'),
  firstName: yup.string().required('Ovo polje je obavezno!'),
  lastName: yup.string().required('Ovo polje je obavezno!'),
  bio: yup.string().required('Ovo polje je obavezno!'),
  city: yup.string().required('Ovo polje je obavezno!'),
  address: yup.string().required('Ovo polje je obavezno!'),
  phone: yup.string().required('Ovo polje je obavezno!'),
  password: yup.string().required('Ovo polje je obavezno!'),
  occupation: yup.string().required('Ovo polje je obavezno!'),
  dateOfBirth: yup.date().required('Ovo polje je obavezno!'),
  shouldHideEmail: yup.boolean().optional(),
  shouldHideAddress: yup.boolean().optional(),
  shouldHidePhone: yup.boolean().optional(),
  profilePicture: yup.string().required('Profilna slika je obavezna!'),
  headerImage: yup.string().required('Naslovna slika je obavezna')
});

export const RegisterScreen: React.FC<RegisterScreenProps> = () => {
  const [mailRadioSelected, setMailRadioSelected] = useState<boolean>(false);
  const [addressRadioSelected, setAddressRadioSelected] =
    useState<boolean>(false);
  const [telRadioSelected, setTelRadioSelected] = useState<boolean>(false);

  const { signUp } = useContext(AuthContext);

  const { control, handleSubmit, watch } = useForm<CreateUserDto>({
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

  const [profilePictureFile, setProfilePictureFile] = useState<File>();

  useEffect(() => {
    if (profilePictureFile) {
      const formData = new FormData();
      formData.append('image', profilePictureFile);

      axios
        .post('http://localhost:3000/image/upload', formData, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data'
          },
          params: { prefix: 'users' }
        })
        .then(function (response) {
          if (response) {
            console.log('RESPONSE IS WHAT: ', response);
          } else {
            console.log('NOT GOOD');
          }
        })
        .catch(function (error) {
          console.log('Error: ', error);
        });
    }
  }, [profilePictureFile]);

  const [headerImageFile, setHeaderImageFile] = useState<File>();

  useEffect(() => {
    if (headerImageFile) {
      const formData = new FormData();
      formData.append('image', headerImageFile);

      // axios
      //   .post('http://localhost:3000/image/upload', formData, {
      //     headers: {
      //       Accept: 'application/json',
      //       'Content-Type': 'multipart/form-data'
      //     },
      //     params: {
      //       prefix: 'users'
      //     }
      //   })
      //   .then(function (response) {
      //     if (response.data.user) {
      //     } else {
      //       console.log('NOT GOOD');
      //     }
      //   })
      //   .catch(function (error) {
      //     console.log('Error: ', error);
      //   });
    }
  }, [headerImageFile]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <Typography variant={'headingBold'}>Kreirajmo tvoj profil!</Typography>
      </div>
      <div className={styles.flexColumn}>
        <div className={styles.profilePictureAndBasicDataContainer}>
          <div className={styles.profilePictureContainer}>
            <div className={styles.addProfileTextContainer}>
              <Typography variant={'bodyNormal'}>
                Dodaj sliku profila
              </Typography>
            </div>
            <div className={styles.profilePicture}>
              <ControlledImageInput
                control={control}
                name={'profilePicture'}
                borderRadius="100px"
                onFileChange={(file) => setProfilePictureFile(file)}
              />
            </div>
          </div>
          <div className={styles.basicDataWrapper}>
            <div className={styles.basicDataTextContainer}>
              <Typography variant={'bodyNormal'}>
                Osnovne informacije
              </Typography>
            </div>
            <div className={styles.firstAndLastNameContainer}>
              <div style={{ flex: 1 }}>
                <ControlledInput
                  control={control}
                  name={'firstName'}
                  label="Ime"
                />
              </div>
              <div style={{ flex: 1 }}>
                <ControlledInput
                  control={control}
                  name={'lastName'}
                  label="Prezime"
                />
              </div>
            </div>
            <div style={{ width: '100%', marginBottom: '20px' }}>
              <ControlledDatePicker
                control={control}
                name={'dateOfBirth'}
                label="Datum rođenja"
              />
            </div>
            <div className={styles.emailAndPasswordContainer}>
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
          <ControlledImageInput
            control={control}
            name={'headerImage'}
            borderRadius="10px"
            onFileChange={(file) => setHeaderImageFile(file)}
          />
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
          <div className={styles.emailAndPasswordContainer}>
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
              <ControlledInput control={control} name={'city'} label="Grad" />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.emailAndPasswordContainer}>
            <div style={{ flex: 1 }}>
              <ControlledInput
                control={control}
                name={'occupation'}
                label="Zanimanje"
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
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  color: '#787878'
                }}
              >
                <b>NAPOMENA:</b> U skladu sa zakonima o ličnim podacima online,
                u predviđenim poljima označenim sa "
                <div
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    width: '16px'
                  }}
                >
                  <RadioButton onChange={() => {}} disabled />
                </div>
                " možete ukloniti prikaz ovih informacija javno. Ovu opciju
                možete uvijek naknadno mijenjati u postavkama profila.
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

// // THIS IS FOR LOGO IMAGE
// const [profilePicture, setProfilePicture] = useState<string>();
// const profilePictureRef = useRef(null);

// const handleProfilePictureChange = (event: any) => {
//   const file = event.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       setProfilePicture(e.target!!.result as string);
//       setValue('profilePicture', e.target!!.result as string);
//     };
//     reader.readAsDataURL(file);
//   }
// };

// const handleProfilePictureButtonClick = () => {
//   //@ts-ignore
//   profilePictureRef.current!!.click();
// };
// //THIS IS FOR HEADER IMAGE
// const [headerImage, setHeaderImage] = useState<string>();
// const headerImageRef = useRef(null);

// const handleHeaderImageChange = (event: any) => {
//   const file = event.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       setHeaderImage(e.target!!.result as string);
//       setValue('headerImage', e.target!!.result as string);
//     };
//     reader.readAsDataURL(file);
//   }
// };

// const handleHeaderImageButtonClick = () => {
//   //@ts-ignore
//   headerImageRef.current!!.click();
// };
