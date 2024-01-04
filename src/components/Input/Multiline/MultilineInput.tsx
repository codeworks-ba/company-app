import React, { useState } from 'react';
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps
} from 'react-hook-form';
import { Typography } from '../../Typography/Typography';
import { MultileInputStyleProps, styles } from './MultilineInput.styles';
import '../Input.styled.css';

type MultilineInputProps<T extends FieldValues> = UseControllerProps<T> &
  Partial<MultiLineInputProps>;

type MultiLineInputProps = {
  label?: string;
  characterLimit?: number;
  rows?: number;
  onChange: (value: string) => void;
  errorText?: FieldError;
} & MultileInputStyleProps;

export const MultiLineInput: React.FC<MultiLineInputProps> = ({
  label,
  errorText,
  characterLimit = 100,
  rows = 4,
  customStyle,
  onChange,
  ...rest
}) => {
  const [charCount, setCharCount] = useState(0);
  const style = styles({ customStyle });

  return (
    <div style={style().multilineContainer}>
      <textarea
        {...rest}
        style={style(errorText).inputContainerStyle}
        className="input"
        rows={rows}
        placeholder={label || ''}
        onChange={(e) => {
          const inputText = e.target.value;
          if (inputText.length <= characterLimit) {
            onChange(inputText);
            setCharCount(inputText.length);
          }
        }}
      />
      <div style={style().inputStyle}>
        <Typography variant="bodyMedium">{`${charCount}/${characterLimit}`}</Typography>
      </div>
      <span
        style={{
          position: 'absolute',
          bottom: '-10px',
          left: '0px',
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

export const ControlledMultilineInput = <T extends FieldValues>({
  control,
  name,
  ...rest
}: MultilineInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, ...restField }, fieldState }) => (
        <MultiLineInput
          {...restField}
          {...rest}
          onChange={onChange}
          errorText={fieldState.error}
        />
      )}
    />
  );
};
