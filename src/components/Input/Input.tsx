import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps
} from 'react-hook-form';
import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
  InputProps;

const InputType = {
  text: 'text',
  number: 'number'
};

type InputProps = TextFieldProps & {
  errorText?: FieldError;
  label?: string;
};

export const Input: React.FC<InputProps> = ({ errorText, label, value }) => {
  return (
    <div>
      <TextField
        variant={'outlined'}
        label={label}
        error={errorText ? true : false}
        helperText={errorText && errorText.message}
      />
    </div>
  );
};

export const ControlledInput = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, ...restField },
        fieldState: { error }
      }) => <Input {...restField} {...rest} errorText={error} />}
    />
  );
};
