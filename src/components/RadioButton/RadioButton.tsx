import React, { useState } from 'react';

type RadioButtonProps = {
  disabled?: boolean;
  onChange: (value: boolean) => void;
};

export const RadioButton: React.FC<RadioButtonProps> = ({
  disabled = false,
  onChange
}) => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div
      style={{
        width: '100%',
        borderRadius: 100,
        padding: '10%',
        border: '1px solid #009FB7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        aspectRatio: 1
      }}
      onClick={() =>
        !disabled &&
        setChecked((oldVal) => {
          onChange(!oldVal);
          return !oldVal;
        })
      }
    >
      <div
        style={{
          borderRadius: 100,
          width: '100%',
          height: '100%',
          backgroundColor: checked ? '#009FB7' : 'transparent'
        }}
      ></div>
    </div>
  );
};
