import React from 'react';
import { ScreenWrapper } from '../../components/ScreenWrapper/ScreenWrapper';
import styles from './CreateBusinessScreenStyles.module.css';
import { Typography } from '../../components/Typography/Typography';
import { useForm } from 'react-hook-form';
import { ControlledInput } from '../../components/Input/Input';
import { ControlledSelect } from '../../components/Select/Select';
import { ControlledMultilineInput } from '../../components/Input/Multiline/MultilineInput';
import plusCircle from '../../images/plusCircle.svg';
import { ImageCard } from '../../components/ImageCard/ImageCard';
import { services } from '../../dummyData/DummyData';
import { Button } from '../../components/Button/Button';

type CreateBusinessProps = unknown;

export const CreateBusinessScreen: React.FC<CreateBusinessProps> = () => {
  const { control, handleSubmit } = useForm<any>({
    // resolver: yupResolver(validationSchema)
  });

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
            <div style={{ width: '35%' }}>
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
                label="Dodaj tag-ove, odvajaj zarezima"
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
                    <img
                      src={plusCircle}
                      alt=""
                      style={{ height: 80, width: 80 }}
                    />
                  </div>
                </div>
                <div className={styles.logoImageWrapper}>
                  <Typography variant="bodyNormal">
                    Dodaj logo biznisa
                  </Typography>
                  <div className={styles.logoImageContainer}>
                    <img
                      src={plusCircle}
                      alt=""
                      style={{ height: 80, width: 80 }}
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
              {services.map((service) => (
                <div className={styles.imageCardStyle}>
                  <ImageCard
                    type={'header'}
                    headerText="Naziv usluge"
                    onClick={() => {}}
                  />
                </div>
              ))}
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
                    name="mon"
                    control={control}
                    label="Ponedeljak"
                    options={[
                      { label: 'Ten', value: 10 },
                      { label: 'Twenty', value: 20 },
                      { label: 'Thirty', value: 30 }
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
                    name="mon"
                    control={control}
                    label="Ponedeljak"
                    options={[
                      { label: 'Ten', value: 10 },
                      { label: 'Twenty', value: 20 },
                      { label: 'Thirty', value: 30 }
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
                    name="mon"
                    control={control}
                    label="Ponedeljak"
                    options={[
                      { label: 'Ten', value: 10 },
                      { label: 'Twenty', value: 20 },
                      { label: 'Thirty', value: 30 }
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
                    name="mon"
                    control={control}
                    label="Ponedeljak"
                    options={[
                      { label: 'Ten', value: 10 },
                      { label: 'Twenty', value: 20 },
                      { label: 'Thirty', value: 30 }
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
                    name="mon"
                    control={control}
                    label="Ponedeljak"
                    options={[
                      { label: 'Ten', value: 10 },
                      { label: 'Twenty', value: 20 },
                      { label: 'Thirty', value: 30 }
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
                name="fb"
                control={control}
                label="Link za Facebook stranicu"
              />
              <ControlledInput
                name="insta"
                control={control}
                label="Link za Instagram profil"
              />
              <ControlledInput
                name="twitter"
                control={control}
                label="Link za X/Twitter profil"
              />
              <ControlledInput
                name="linkedin"
                control={control}
                label="Link za Linkedin stranicu"
              />
              <ControlledInput
                name="anySite"
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
            onClick={() => {}}
          />
        </div>
      </div>
    </ScreenWrapper>
  );
};
