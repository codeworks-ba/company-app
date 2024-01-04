import { Autocomplete, FormControl, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps
} from 'react-hook-form';
import { themeColors } from '../../style/theme/colors';

type ControlledAutocompleteProps<T extends FieldValues> =
  UseControllerProps<T> & AutocompleteProps;

type AutocompleteProps = {
  label?: string;
  options: { label: string; value: string }[];
  errorText?: FieldError;
  onChange?: (value: string | undefined) => void;
};

const CustomAutocomplete: React.FC<AutocompleteProps> = ({
  label,
  options,
  onChange,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Autocomplete
      {...rest}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      onChange={(e: any, newValue: { label: string; value: string } | null) =>
        onChange && onChange(newValue?.value)
      }
      disablePortal
      id="combo-box-demo"
      options={options}
      renderInput={(params) => <TextField {...params} label={label} />}
      sx={{
        width: '100%',
        '& .MuiOutlinedInput-root': {
          borderRadius: '25px',
          height: '38px'
        },
        '& .MuiAutocomplete-input': {
          transform: 'translateY(-10px)'
        },
        '& .MuiInputLabel-root': {
          transform: 'translate(14px, 11px) scale(1)',
          fontSize: '13px'
        },
        '& .MuiInputLabel-root.Mui-focused': {
          transform: 'translate(14px, -9px) scale(0.88);',
          color: '#009FB7'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
          {
            border: `1px solid ${themeColors.focusedColor}`
          },
        // '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        //   border: isOpen
        //     ? `1px solid ${themeColors.focusedColor}`
        //     : '1px solid #D4D4D4'
        // },
        '& .MuiInputLabel-shrink': {
          transform: 'translate(14px, -9px) scale(0.88);'
        }
      }}
    />
  );
};

export const ControlledAutocomplete = <T extends FieldValues>({
  control,
  name,
  label,
  options,
  ...rest
}: ControlledAutocompleteProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <CustomAutocomplete
          label={label}
          options={options}
          errorText={fieldState.error}
          {...field}
          {...rest}
        />
      )}
    />
  );
};
