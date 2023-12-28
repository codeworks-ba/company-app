import React from 'react';
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps
} from 'react-hook-form';
import '../Input.styled.css';
import { SearchInputStyleProps, styles } from './SearchInput.styles';
import UilSearch from '@iconscout/react-unicons/icons/uil-search';

type ControlledSearchInputProps<T extends FieldValues> = UseControllerProps<T> &
  SearchInputProps;

type SearchInputProps = {
  errorText?: FieldError;
  label?: string;
  startAdornment?: React.ReactElement;
} & SearchInputStyleProps;

const SearchInput: React.FC<SearchInputProps> = ({
  errorText,
  label,
  startAdornment = <UilSearch size="15" />,
  customStyle,
  ...rest
}) => {
  const style = styles({ customStyle });
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            left: '16px',
            top: '57%',
            transform: 'translateY(-50%)'
          }}
        >
          {startAdornment}
        </div>
        <input
          {...rest}
          placeholder={label || 'Type anything to search...'}
          style={style(errorText).inputComponent}
          className="input"
        />
        {errorText && <span style={{ color: 'red' }}>{errorText.message}</span>}
      </div>
    </div>
  );
};

export const ControlledSearchInput = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledSearchInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <SearchInput {...field} {...rest} errorText={fieldState.error} />
      )}
    />
  );
};
