import React, { useContext } from 'react';
import { ControlledInput } from '../../components/Input/Input';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Typography } from '../../components/Typography/Typography';
import { Button } from '../../components/Button/Button';
import { Link } from '../../components/Link/Link';
import google from '../../images/google.png';
import { LoginUserDto } from '../../services/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthContext } from '../../providers/auth/authContext';
import styles from './LoginScreenStyles.module.css';

type LoginScreenProps = unknown;
const validationSchema = yup.object({
  email: yup
    .string()
    .email('Molimo koristite ispravan email format!')
    .required('Ovo polje je obavezno!'),
  password: yup.string().required('Ovo polje je obavezno!')
});

export const LoginScreen: React.FC<LoginScreenProps> = () => {
  const { control, handleSubmit } = useForm<LoginUserDto>({
    resolver: yupResolver(validationSchema)
  });

  const { signIn } = useContext(AuthContext);

  const onSubmit = (data: LoginUserDto) => {
    signIn(data);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <Typography variant={'headingBold'}>Dobrodošli nazad!</Typography>
      </div>
      <div style={{ marginBottom: '16px' }}>
        <Typography>Pristupite računu putem email-a:</Typography>
      </div>
      <div className={styles.mainWidth}>
        <ControlledInput control={control} label="Email" name="email" />
        <ControlledInput
          control={control}
          label="Lozinka"
          name="password"
          textType={'password'}
        />
        <div className={styles.buttonWrapper}>
          <Button
            text="Prijavi se"
            onClick={handleSubmit(onSubmit)}
            variant={'filled'}
            textVariant={'smallButtonText'}
            customStyle={{ width: '100%', height: '38px' }}
          />
        </div>
      </div>
      <Link text="Zaboravljena lozinka?" link="" textDecoration={'underline'} />
      <div style={{ margin: '46px 0px', width: '344px' }}>
        <div className={styles.lineWrapper}>
          <div
            style={{ flex: 1, height: '1px', backgroundColor: '#D4D4D4' }}
          ></div>
          <Typography>ili</Typography>
          <div
            style={{ flex: 1, height: '1px', backgroundColor: '#D4D4D4' }}
          ></div>
        </div>
      </div>
      <div className={styles.googleWrapper}>
        <div className={styles.googleContainer}>
          <img
            src={google}
            alt="failedToRender"
            style={{ height: '25px', width: '25px' }}
          />
          <Typography variant={'bodySmall'}>
            Prijava sa Google računom
          </Typography>
        </div>
      </div>
    </div>
  );
};
