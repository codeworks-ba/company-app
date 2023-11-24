import React, { useState } from 'react';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import { Typography } from '../../Typography/Typography';
import { styles } from './MultilineInput.styles';

type MultilineInputProps<T extends FieldValues> = UseControllerProps<T> &
  Partial<MultiLineInputProps>;

type MultiLineInputProps = {
  label?: string;
  characterLimit?: number;
  rows?: number;
  onChange: (value: string) => void;
};

export const MultiLineInput: React.FC<MultiLineInputProps> = ({
  label,
  characterLimit = 100,
  rows = 4,
  onChange,
  ...rest
}) => {
  const [charCount, setCharCount] = useState(0);

  return (
    <div style={styles.multilineContainer}>
      <textarea
        {...rest}
        style={styles.inputContainerStyle}
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
      <div style={styles.inputStyle}>
        <Typography
          text={`${charCount}/${characterLimit}`}
          size={'xs'}
          color={'#D4D4D4'}
          font={'OxygenRegular'}
        />
      </div>
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
      render={({ field: { onChange, ...restField } }) => (
        <MultiLineInput {...restField} {...rest} onChange={onChange} />
      )}
    />
  );
};
