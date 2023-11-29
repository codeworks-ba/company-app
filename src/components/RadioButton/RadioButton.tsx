import React, { useState } from 'react';

type RadioButtonProps = {
  onChange: (value: boolean) => void;
};

export const RadioButton: React.FC<RadioButtonProps> = ({ onChange }) => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        borderRadius: 100,
        padding: 5,
        border: '1px solid #009FB7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onClick={() =>
        setChecked((oldVal) => {
          onChange(!oldVal);
          return !oldVal;
        })
      }
    >
      <div
        style={{
          borderRadius: 100,
          padding: '5px',
          backgroundColor: checked ? '#009FB7' : 'transparent'
        }}
      ></div>
    </div>
  );
};
