import React from 'react';
import { ControlledInput } from '../../components/Input/Input';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { LoginUserDto } from '../../services/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../components/Button/Button';
import { Typography } from '../../components/Typography/Typography';
import blankImage from '../../images/blankImage.png';
import templateImage from '../../images/templateImage.png';
import { ImageCard } from '../../components/ImageCard/ImageCard';
import { ControlledSelect } from '../../components/Select/Select';
import { ControlledMultilineInput } from '../../components/Input/Multiline/MultilineInput';
import { ImageWithText } from '../../components/ImageWithText/ImageWithText';
import { Link } from '../../components/Link/Link';
import { Tag } from '../../components/Tag/Tag';
import { ControlledDatePicker } from '../../components/DatePicker/DatePicker';

type LoginScreenProps = unknown;
const validationSchema = yup.object({
  email: yup
    .string()
    .email('Use correct email format!')
    .required('This field is required!'),
  test: yup.string().required('This field is required!'),
  test2: yup.string().required('This field is required!')
});

export const LoginScreen: React.FC<LoginScreenProps> = () => {
  const { control, handleSubmit, setFocus, register, formState } =
    useForm<LoginUserDto>({
      // resolver: yupResolver(validationSchema)
    });

  const onSubmit = (data: LoginUserDto) => {
    console.log('DATA: ', data.test3.toISOString());
  };

  return (
    <div style={{ padding: 12 }}>
      <h1>LOGIN SCREEN</h1>
    </div>
  );
};
