import React from 'react';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

type ControlledDatePickerProps<T extends FieldValues> = UseControllerProps<T> &
  Partial<DatePickerProps>;

type DatePickerProps = {
  label?: string;
  onChange: (value: any) => void;
  value: any;
  ref: any;
};

const CustomDatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  ref,
  onChange
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        sx={{
          fontFamily: 'InterLight',
          width: '100%',
          '& .MuiInputLabel-root.Mui-focused': {
            transform: 'translate(14px, -9px) scale(0.75);'
          },
          '& .MuiInputLabel-root': {
            transform: 'translate(14px, 9px) scale(1)'
          },
          '.MuiInputLabel-shrink': {
            transform: 'translate(14px, -9px)scale(0.75);'
          },
          '& .MuiOutlinedInput-root': {
            height: '38px',
            borderRadius: '6px'
          }
        }}
        label={label}
        value={value}
        inputRef={ref}
        onChange={(date) => {
          onChange(date);
        }}
      />
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
          {...restField}
          {...rest}
        />
      )}
    />
  );
};
