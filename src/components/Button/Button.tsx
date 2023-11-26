import React from 'react';
import { ButtonStyleProps, Variant, styles } from './Button.styles';
import { ColorVariants, Typography } from '../Typography/Typography';

type ButtonProps = {
  text: string;
  onClick: () => void;
  color?: string;
} & ButtonStyleProps;

const colorVariantMap: { [key in Variant]: ColorVariants } = {
  filled: 'secondary',
  outlined: 'primary',
  transparent: 'primary'
};

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant,
  color = '#009FB7'
}) => {
  const style = styles({ variant });

  return (
    <button onClick={onClick} style={style(color).buttonComponent}>
      <Typography variant={'bodyMedium'} color={colorVariantMap[variant]}>
        {text}
      </Typography>
    </button>
  );
};
