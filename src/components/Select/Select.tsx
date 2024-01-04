import React from 'react';
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps
} from 'react-hook-form';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

type ControlledSelectProps<T extends FieldValues> = UseControllerProps<T> &
  SelectProps;

type SelectProps = {
  label?: string;
  options: { label: string; value: string | number }[];
  errorText?: FieldError;
};

const CustomSelect: React.FC<SelectProps> = ({
  label,
  options,
  errorText,
  ...rest
}) => {
  return (
    <FormControl
      sx={{
        minWidth: '100%',
        '& .MuiInputLabel-root': {
          transform: 'translate(14px, 11px) scale(1)',
          fontSize: '13px'
        },
        '& .MuiInputLabel-root.Mui-focused': {
          transform: 'translate(14px, -9px) scale(0.88);',
          color: '#009FB7'
        },
        '& .MuiInputLabel-shrink': {
          transform: 'translate(14px, -9px) scale(0.88);'
        }
      }}
      size="small"
    >
      <InputLabel
        id="label"
        sx={{
          fontFamily: 'InterRegular'
        }}
      >
        {label}
      </InputLabel>
      <Select
        label={label}
        {...rest}
        sx={{
          borderRadius: '25px',
          height: '38px',
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#009FB7'
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: errorText?.message && 'red'
          }
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
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
    </FormControl>
  );
};

export const ControlledSelect = <T extends FieldValues>({
  control,
  name,
  label,
  options,
  ...rest
}: ControlledSelectProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { ...rest }, fieldState }) => (
        <CustomSelect
          label={label}
          options={options}
          errorText={fieldState.error}
          {...rest}
        />
      )}
    />
  );
};
