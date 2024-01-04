import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps
} from 'react-hook-form';
import React, { HTMLInputTypeAttribute } from 'react';
import { InputStyleProps, styles } from './Input.styles';
import './Input.styled.css';

type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
  InputProps;

type InputProps = {
  errorText?: FieldError;
  label?: string;
  startAdornment?: React.ReactElement;
  textType?: HTMLInputTypeAttribute;
} & InputStyleProps;

export const Input: React.FC<InputProps> = ({
  errorText,
  label,
  startAdornment,
  customStyle,
  textType = 'text',
  ...rest
}) => {
  const style = styles({ customStyle });
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input
        {...rest}
        type={textType}
        placeholder={label || 'Email'}
        style={style(errorText).inputComponent}
        className="input"
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
      {/* </>
      )} */}
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
