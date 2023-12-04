import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps
} from 'react-hook-form';
import React from 'react';
import { InputStyleProps, styles } from '../Input.styles';
import { RadioButton } from '../../RadioButton/RadioButton';
import '../Input.styled.css';

type ControlledRadioInputProps<T extends FieldValues> = UseControllerProps<T> &
  InputProps;

type InputProps = {
  errorText?: FieldError;
  label?: string;
  onRadioPress: (value: boolean) => void;
} & InputStyleProps;

export const Input: React.FC<InputProps> = ({
  errorText,
  label,
  inputType,
  onRadioPress,
  ...rest
}) => {
  const style = styles({ inputType });
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            height: '6px',
            width: '6px',
            right: '24px',
            top: '35%',
            transform: 'translateY(-50%)'
          }}
        >
          <RadioButton
            onChange={(value) => {
              onRadioPress(value);
            }}
          />
        </div>
        <input
          {...rest}
          placeholder={label || 'Email'}
          style={style(errorText).inputComponent}
          className="input"
        />
      </div>
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
    </div>
  );
};

export const ControlledRadioInput = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledRadioInputProps<T>) => {
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
