import React from 'react';
import { FieldError } from 'react-hook-form';
import { InputStyleProps, styles } from '../Input.styles';

type SearchInputProps = {
  errorText?: FieldError;
  label?: string;
  startAdornment?: React.ReactElement;
} & InputStyleProps;

export const SearchInput: React.FC<SearchInputProps> = ({
  errorText,
  label,
  startAdornment,
  inputType,
  ...rest
}) => {
  const style = styles({ inputType });
  return (
    <>
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
        />
        {errorText && <span style={{ color: 'red' }}>{errorText.message}</span>}
      </div>
    </>
  );
};
