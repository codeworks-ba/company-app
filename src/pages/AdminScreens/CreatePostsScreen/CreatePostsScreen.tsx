import React from 'react';
import styles from './CreatePostsScreenStyles.module.css';
import { Typography } from '../../../components/Typography/Typography';
import { Button } from '../../../components/Button/Button';
import { useForm } from 'react-hook-form';
import { ControlledInput } from '../../../components/Input/Input';
import { ControlledMultilineInput } from '../../../components/Input/Multiline/MultilineInput';
import plusCircle from '../../../images/plusCircle.svg';

type CreatePostProps = unknown;

export const CreatePostsScreen: React.FC<CreatePostProps> = () => {
  const { control, handleSubmit } = useForm<any>({
    // resolver: yupResolver(validationSchema)
  });

  const image = null;
  return (
    <div className={styles.mainContainer}>
      <Typography variant={'headingBold'}>Admin Panel</Typography>
      <div className={styles.businessWrapper}>
        <ControlledInput
          control={control}
          name={'title'}
          label="Naslov objave"
          inputType={'input'}
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
      <Button text="Kreiraj objavu" onClick={() => {}} variant="filled" />
    </div>
  );
};
