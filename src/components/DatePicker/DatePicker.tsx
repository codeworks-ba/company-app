import React from 'react';
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps
} from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

type ControlledDatePickerProps<T extends FieldValues> = UseControllerProps<T> &
  Partial<DatePickerProps>;

type DatePickerProps = {
  errorText?: FieldError;
  label?: string;
  onChange: (value: any) => void;
  value: any;
  ref: any;
};

const CustomDatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  ref,
  errorText,
  onChange
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        sx={{
          fontFamily: 'InterRegular',
          width: '100%',
          '& .MuiInputLabel-root.Mui-focused': {
            transform: 'translate(14px, -9px) scale(0.75);',
            color: '#009FB7'
          },
          '& .MuiInputLabel-root': {
            transform: 'translate(14px, 12px) scale(1)',
            fontSize: '13px'
          },
          '.MuiInputLabel-shrink': {
            transform: 'translate(14px, -9px)scale(0.75);'
          },
          '& .MuiOutlinedInput-root': {
            border: errorText?.message && '1px solid red',
            height: '38px',
            borderRadius: '25px'
          },
          '& .Mui-focused fieldset.MuiOutlinedInput-notchedOutline': {
            borderColor: '#009FB7'
          }
        }}
        label={label}
        value={value}
        inputRef={ref}
        onChange={(date) => {
          onChange(date);
        }}
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
    </LocalizationProvider>
  );
};

export const ControlledDatePicker = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledDatePickerProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value, ref, ...restField },
        fieldState
      }) => (
        <CustomDatePicker
          onChange={onChange}
          value={value}
          ref={ref}
          errorText={fieldState.error}
          {...restField}
          {...rest}
        />
      )}
    />
  );
};
