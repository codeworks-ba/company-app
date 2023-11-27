import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps
} from 'react-hook-form';
import React from 'react';
import UilSearch from '@iconscout/react-unicons/icons/uil-search';
import { InputStyleProps, styles } from './Input.styles';
import { SearchInput } from './Search/SearchInput';

type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
  InputProps;

type InputProps = {
  errorText?: FieldError;
  label?: string;
  startAdornment?: React.ReactElement;
} & InputStyleProps;

export const Input: React.FC<InputProps> = ({
  errorText,
  label,
  inputType,
  startAdornment,
  ...rest
}) => {
  const style = styles({ inputType });
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {inputType === 'search' ? (
        <>
          {startAdornment ? (
            <SearchInput
              errorText={errorText}
              label={label}
              startAdornment={startAdornment}
              inputType={'search'}
            />
          ) : (
            <SearchInput
              errorText={errorText}
              label={label}
              startAdornment={<UilSearch size="15" />}
              inputType={'search'}
            />
          )}
        </>
      ) : (
        <>
          <input
            {...rest}
            placeholder={label || 'Email'}
            style={style(errorText).inputComponent}
          />
          <span
            style={{
              color: 'red',
              fontSize: '12px',
              lineHeight: '12px',
              height: '12px'
            }}
          >
            {errorText?.message ?? ''}
          </span>
        </>
      )}
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
      render={({ field, fieldState }) => (
        <Input {...field} {...rest} errorText={fieldState.error} />
      )}
    />
  );
};