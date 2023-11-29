import React from 'react';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

type ControlledSelectProps<T extends FieldValues> = UseControllerProps<T> &
  SelectProps;

type SelectProps = {
  label?: string;
  options: { label: string; value: string | number }[];
};

const CustomSelect: React.FC<SelectProps> = ({ label, options, ...rest }) => {
  return (
    <FormControl sx={{ minWidth: '100%' }} size="small">
      <InputLabel id="label">{label}</InputLabel>
      <Select label={label} {...rest} sx={{ borderRadius: '25px' }}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
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
      render={({ field }) => (
        <CustomSelect label={label} options={options} {...field} />
      )}
    />
  );
};
