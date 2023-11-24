import React from 'react';
import { ButtonStyleProps, styles } from './Button.styles';

type ButtonProps = {
  text: string;
  onClick: () => void;
  color?: string;
} & ButtonStyleProps;

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant,
  color = '#009FB7',
  ...rest
}) => {
  const style = styles({ variant });

  return (
    <button onClick={onClick} style={style(color).buttonComponent}>
      {text}
    </button>
  );
};
