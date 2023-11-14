import React from 'react';
import { ControlledInput } from '../../components/Input/Input';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { LoginUserDto } from '../../services/types';
import { yupResolver } from '@hookform/resolvers/yup';

type LoginScreenProps = unknown;
const validationSchema = yup.object({
  email: yup
    .string()
    .email('Use correct email format!')
    .required('This field is required!')
});

export const LoginScreen: React.FC<LoginScreenProps> = () => {
  const { control, handleSubmit, setFocus } = useForm<LoginUserDto>({
    resolver: yupResolver(validationSchema)
  });

  return (
    <div>
      <h1>LOGIN SCREEN</h1>
      <ControlledInput control={control} name={'email'} label="Email" />
    </div>
  );
};
