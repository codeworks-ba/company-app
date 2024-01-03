import React, { useEffect, useRef, useState } from 'react';
import { ScreenWrapper } from '../../components/ScreenWrapper/ScreenWrapper';
import styles from './CreateBusinessScreenStyles.module.css';
import { Typography } from '../../components/Typography/Typography';
import { Resolver, useFieldArray, useForm } from 'react-hook-form';
import { ControlledInput } from '../../components/Input/Input';
import { ControlledSelect } from '../../components/Select/Select';
import { ControlledMultilineInput } from '../../components/Input/Multiline/MultilineInput';
import plusCircle from '../../images/plusCircle.svg';
import { ImageCard } from '../../components/ImageCard/ImageCard';
import { services } from '../../dummyData/DummyData';
import { Button } from '../../components/Button/Button';
import * as yup from 'yup';
import { CreateCompanyDto } from '../../services/types';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TOKEN } from '../../services/token';
import { ControlledEditableImageCard } from '../../components/ImageCard/EditableImageCard/EditableImageCard';
import { ControlledImageInput } from '../../components/CircularImage/CircularImage';

type CreateBusinessProps = unknown;

const validationSchema = yup.object({
  name: yup.string().required('Ovo polje je obavezno!'),
  category: yup.string().required('Ovo polje je obavezno!'),
  program: yup.string().required('Ovo polje je obavezno!'),
  year: yup
    .string()
    .required('Ovo polje je obavezno!')
    .test(
      'Has to be number',
      'Godina mora biti validan broj!',
      (value: string, { createError, path }) => {
        let test = true;
        const yearAsNumber: number = parseInt(value, 10);
        if (isNaN(yearAsNumber) || yearAsNumber < 1500) {
          test = false;
          return createError({
            path: path,
            message: 'Godina mora biti validan broj!',
            type: 'illegalAction'
          });
        }
        return test;
      }
    ),
  about: yup.string().required('Ovo polje je obavezno!'),
  address: yup.string().required('Ovo polje je obavezno!'),
  city: yup.string().required('Ovo polje je obavezno!'),
  zip: yup.string().required('Ovo polje je obavezno!'),
  country: yup.string().required('Ovo polje je obavezno!'),
  phone: yup.string().required('Ovo polje je obavezno!'),
  web: yup.string().required('Ovo polje je obavezno!'),
  facebook: yup.string().optional(),
  instagram: yup.string().optional(),
  twitter: yup.string().optional(),
  linkedIn: yup.string().optional(),
  otherSiteLink: yup.string().optional(),
  monWorkTime: yup.string().required('Ovo polje je obavezno!'),
  tueWorkTime: yup.string().required('Ovo polje je obavezno!'),
  wedWorkTime: yup.string().required('Ovo polje je obavezno!'),
  thuWorkTime: yup.string().required('Ovo polje je obavezno!'),
  friWorkTime: yup.string().required('Ovo polje je obavezno!'),
  email: yup
    .string()
    .email('Molimo koristite ispravan email format!')
    .required('Ovo polje je obavezno!'),
  tags: yup
    .string()
    .required('Ovo polje je obavezno!')
    .test(
      'No more than 4 tags',
      'Dozvoljeno je max 4 tag-a!',
      (value: string, { createError, path }) => {
        let test = true;
        const tagsArray: string[] = value.split(',').map((tag) => tag.trim());
        if (tagsArray.length > 4) {
          test = false;
          return createError({
            path: path,
            message: 'Dozvoljeno je max 4 tag-a!',
            type: 'illegalAction'
          });
        }
        return test;
      }
    )
    .test(
      'Tag size exceeded',
      'Tag ne smije biti duzi od 10 slova!',
      (value: string, { createError, path }) => {
        let test = true;
        const tagsArray: string[] = value.split(',').map((tag) => tag.trim());
        tagsArray.forEach((tag) => {
          if (tag.length > 10) {
            test = false;
            return createError({
              path: path,
              message: 'Tag ne smije biti duži od 10 slova!',
              type: 'illegalAction'
            });
          }
        });
        return test;
      }
    )
    .test(
      'Tag size too small',
      'Tag ne smije biti kraći od 2 slova!',
      (value: string, { createError, path }) => {
        let test = true;
        const tagsArray: string[] = value.split(',').map((tag) => tag.trim());
        tagsArray.forEach((tag) => {
          if (tag.length < 2) {
            test = false;
            return createError({
              path: path,
              message: 'Tag ne smije biti kraċi od 2 slova!',
              type: 'illegalAction'
            });
          }
        });
        return test;
      }
    ),
  services: yup
    .array()
    .of(
      yup.object().shape({
        service: yup.string().required('Molimo unesite naziv usluge!'),
        image: yup.string().optional()
      })
    )
    .required(),
  logoImage: yup.string().required('Logo je obavezan!'),
  headerImage: yup.string().required('Naslovna slika je obavezna!')
});

export const CreateBusinessScreen: React.FC<CreateBusinessProps> = () => {
  const { control, handleSubmit, setValue, setError } =
    useForm<CreateCompanyDto>({
      resolver: yupResolver(validationSchema) as Resolver<CreateCompanyDto>
    });

  const navigate = useNavigate();

  const onSubmit = (data: CreateCompanyDto) => {
    let isOkay = true;
    data.services.forEach((service, index) => {
      if (!service.image) {
        setError(`services.${index}.service`, {
          message: 'Molimo dodajte sliku usluge!'
        });
        isOkay = false;
      }
    });
    if (isOkay) {
      console.log('DATA: ', data);
      const dataToSend: any = data;
      dataToSend.year = Number(dataToSend.year);
      axios
        .post('http://localhost:3000/companies', dataToSend, {
          headers: { Authorization: `Bearer ${TOKEN.get()}` }
        })
        .then(function (response) {
          if (response.data) {
            navigate('/pretraga');
          } else {
            console.log('NOT GOOD');
          }
        })
        .catch(function (error) {
          console.log('Error: ', error);
        });
    }
  };

  // THIS BELOW IS FOR SERVICES PICTURES
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [imagesArray, setImagesArray] = useState<
    { index: number; image: string }[]
  >([]);

  const { append, fields } = useFieldArray({
    control,
    name: 'services'
  });

  const [logoPictureFile, setLogoPictureFile] = useState<File>();

  useEffect(() => {
    if (logoPictureFile) {
      const formData = new FormData();
      formData.append('image', logoPictureFile);

      // axios
      //   .post('http://localhost:3000/image/upload', formData, {
      //     headers: {
      //       Accept: 'application/json',
      //       'Content-Type': 'multipart/form-data'
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
  }, [logoPictureFile]);

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
    <ScreenWrapper>
      <div className={styles.createScreenWrapper}>
        <div className={styles.headerContainer}>
          <Typography variant={'headingBold'}>
            Kreirajmo tvoj biznis profil!
          </Typography>
        </div>
        <div className={styles.flexColumnWithGap}>
          <div className={styles.mainInformationWrapper}>
            <div className={styles.basicDataWrapper}>
              <div style={{ marginBottom: '16px' }}>
                <Typography variant="bodyNormal">
                  Osnovne informacije
                </Typography>
              </div>
              <ControlledInput
                name="name"
                control={control}
                label="Naziv biznisa"
              />
              <ControlledSelect
                name="category"
                control={control}
                label="Kategorija biznisa"
                options={[
                  { label: 'Ten', value: 10 },
                  { label: 'Twenty', value: 20 },
                  { label: 'Thirty', value: 30 }
                ]}
              />
              <ControlledInput
                name="tags"
                control={control}
                label="Dodaj tag-ove, odvajaj zarezima (max 4)"
              />
              <ControlledSelect
                name="program"
                control={control}
                label="Program"
                options={[
                  { label: 'Ten', value: 10 },
                  { label: 'Twenty', value: 20 },
                  { label: 'Thirty', value: 30 }
                ]}
              />
              <ControlledInput
                name="year"
                control={control}
                label="Godina osnivanja"
              />
            </div>
            <div className={styles.imagesAndBioWrapper}>
              <div className={styles.imagesWrapper}>
                <div className={styles.headerImageWrapper}>
                  <Typography variant="bodyNormal">
                    Dodaj naslovnu sliku
                  </Typography>
                  <div className={styles.headerImageContainer}>
                    <ControlledImageInput
                      control={control}
                      name={'headerImage'}
                      borderRadius="10px"
                      onFileChange={(file) => setHeaderImageFile(file)}
                    />
                  </div>
                </div>
                <div className={styles.logoImageWrapper}>
                  <Typography variant="bodyNormal">
                    Dodaj logo biznisa
                  </Typography>
                  <div className={styles.logoImageContainer}>
                    <ControlledImageInput
                      control={control}
                      name={'logoImage'}
                      borderRadius="100px"
                      onFileChange={(file) => setLogoPictureFile(file)}
                    />
                  </div>
                </div>
              </div>
              <ControlledMultilineInput
                name="about"
                control={control}
                label="O biznisu"
                rows={4}
                characterLimit={240}
              />
            </div>
          </div>
          <div>
            <div style={{ marginBottom: '16px' }}>
              <Typography variant="bodyNormal">Usluge</Typography>
            </div>
            <div className={styles.imageCardWrapper}>
              {fields.map((field, index) => (
                <div style={{ width: '250px', height: '250px' }} key={field.id}>
                  <ControlledEditableImageCard
                    control={control}
                    name={`services.${index}`}
                    label="Unesite text"
                  />
                </div>
              ))}
              <div style={{ width: '250px', height: '250px' }}>
                <ImageCard
                  type="header"
                  headerText="Dodaj novu"
                  onClick={() => {
                    append({
                      service: '',
                      image: ''
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles.businessDataWrapper}>
            <div className={styles.flexColumnFlex1}>
              <div style={{ marginBottom: '16px' }}>
                <Typography variant="bodyNormal">Kontakt</Typography>
              </div>
              <ControlledInput
                name="address"
                control={control}
                label="Adresa"
              />
              <ControlledInput name="city" control={control} label="Grad" />
              <ControlledInput name="zip" control={control} label="ZIP" />
              <ControlledInput
                name="country"
                control={control}
                label="Država"
              />
              <ControlledInput
                name="phone"
                control={control}
                label="Kontakt telefon"
              />
              <ControlledInput name="email" control={control} label="Email" />
              <ControlledInput name="web" control={control} label="Web" />
            </div>
            <div className={styles.flexColumnFlex1}>
              <div style={{ marginBottom: '16px' }}>
                <Typography variant="bodyNormal">Radno vrijeme</Typography>
              </div>
              <div className={styles.dayContainer}>
                <div style={{ transform: 'translateY(10px)', width: '20%' }}>
                  <Typography variant="bodyNormal">Ponedeljak</Typography>
                </div>
                <div style={{ flex: 1 }}>
                  <ControlledSelect
                    name="monWorkTime"
                    control={control}
                    label="Ponedeljak"
                    options={[
                      { label: '07:00 - 15:00', value: '07:00 - 15:00' },
                      { label: '08:00 - 16:00', value: '08:00 - 16:00' },
                      { label: '09:00 - 17:00', value: '09:00 - 17:00' },
                      { label: '10:00 - 18:00', value: '10:00 - 18:00' },
                      { label: 'Nije navedeno', value: 'Nije navedeno' },
                      { label: 'Neradni dan', value: 'Neradni dan' }
                    ]}
                  />
                </div>
              </div>
              <div className={styles.dayContainer}>
                <div style={{ transform: 'translateY(10px)', width: '20%' }}>
                  <Typography variant="bodyNormal">Utorak</Typography>
                </div>
                <div style={{ flex: 1 }}>
                  <ControlledSelect
                    name="tueWorkTime"
                    control={control}
                    label="Utorak"
                    options={[
                      { label: '07:00 - 15:00', value: '07:00 - 15:00' },
                      { label: '08:00 - 16:00', value: '08:00 - 16:00' },
                      { label: '09:00 - 17:00', value: '09:00 - 17:00' },
                      { label: '10:00 - 18:00', value: '10:00 - 18:00' },
                      { label: 'Nije navedeno', value: 'Nije navedeno' },
                      { label: 'Neradni dan', value: 'Neradni dan' }
                    ]}
                  />
                </div>
              </div>
              <div className={styles.dayContainer}>
                <div style={{ transform: 'translateY(10px)', width: '20%' }}>
                  <Typography variant="bodyNormal">Srijeda</Typography>
                </div>
                <div style={{ flex: 1 }}>
                  <ControlledSelect
                    name="wedWorkTime"
                    control={control}
                    label="Srijeda"
                    options={[
                      { label: '07:00 - 15:00', value: '07:00 - 15:00' },
                      { label: '08:00 - 16:00', value: '08:00 - 16:00' },
                      { label: '09:00 - 17:00', value: '09:00 - 17:00' },
                      { label: '10:00 - 18:00', value: '10:00 - 18:00' },
                      { label: 'Nije navedeno', value: 'Nije navedeno' },
                      { label: 'Neradni dan', value: 'Neradni dan' }
                    ]}
                  />
                </div>
              </div>
              <div className={styles.dayContainer}>
                <div style={{ transform: 'translateY(10px)', width: '20%' }}>
                  <Typography variant="bodyNormal">Četvrtak</Typography>
                </div>
                <div style={{ flex: 1 }}>
                  <ControlledSelect
                    name="thuWorkTime"
                    control={control}
                    label="Ċetvrtak"
                    options={[
                      { label: '07:00 - 15:00', value: '07:00 - 15:00' },
                      { label: '08:00 - 16:00', value: '08:00 - 16:00' },
                      { label: '09:00 - 17:00', value: '09:00 - 17:00' },
                      { label: '10:00 - 18:00', value: '10:00 - 18:00' },
                      { label: 'Nije navedeno', value: 'Nije navedeno' },
                      { label: 'Neradni dan', value: 'Neradni dan' }
                    ]}
                  />
                </div>
              </div>
              <div className={styles.dayContainer}>
                <div style={{ transform: 'translateY(10px)', width: '20%' }}>
                  <Typography variant="bodyNormal">Petak</Typography>
                </div>
                <div style={{ flex: 1 }}>
                  <ControlledSelect
                    name="friWorkTime"
                    control={control}
                    label="Petak"
                    options={[
                      { label: '07:00 - 15:00', value: '07:00 - 15:00' },
                      { label: '08:00 - 16:00', value: '08:00 - 16:00' },
                      { label: '09:00 - 17:00', value: '09:00 - 17:00' },
                      { label: '10:00 - 18:00', value: '10:00 - 18:00' },
                      { label: 'Nije navedeno', value: 'Nije navedeno' },
                      { label: 'Neradni dan', value: 'Neradni dan' }
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className={styles.flexColumnFlex1}>
              <div style={{ marginBottom: '16px' }}>
                <Typography variant="bodyNormal">Socijalne mreže</Typography>
              </div>
              <ControlledInput
                name="facebook"
                control={control}
                label="Link za Facebook stranicu"
              />
              <ControlledInput
                name="instagram"
                control={control}
                label="Link za Instagram profil"
              />
              <ControlledInput
                name="twitter"
                control={control}
                label="Link za X/Twitter profil"
              />
              <ControlledInput
                name="linkedIn"
                control={control}
                label="Link za Linkedin stranicu"
              />
              <ControlledInput
                name="otherSiteLink"
                control={control}
                label="Link za neku drugu stranicu"
              />
            </div>
          </div>
        </div>
        <div style={{ marginTop: '64px' }}>
          <Button
            text="Kreiraj moj biznis"
            variant={'filled'}
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </div>
    </ScreenWrapper>
  );
};

//   const fileInputRef = useRef(null);

// const handleButtonClick = (index: number) => {
//   setCurrentIndex(index);
//   //@ts-ignore
//   fileInputRef.current!!.click();
// };
// // THIS IS FOR LOGO IMAGE
// const [logoImage, setLogoImage] = useState<string>();
// const logoImageRef = useRef(null);

// const handleLogoImageChange = (event: any) => {
//   const file = event.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       setLogoImage(e.target!!.result as string);
//       setValue('logoImage', e.target!!.result as string);
//     };
//     reader.readAsDataURL(file);
//   }
// };

// const handleLogoImageButtonClick = () => {
//   //@ts-ignore
//   logoImageRef.current!!.click();
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
