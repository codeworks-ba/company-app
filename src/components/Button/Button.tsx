import React from 'react';
import { ButtonStyleProps, Variant, styles } from './Button.styles';
import { ColorVariants, Typography } from '../Typography/Typography';
import { TypographyVariants } from '../Typography/Typography.styles';

type ButtonProps = {
  text: string;
  onClick: () => void;
  color?: string;
  textVariant?: TypographyVariants;
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
  textVariant = 'bodyNormal',
  color = '#009FB7'
}) => {
  const style = styles({ variant });

  return (
    <button onClick={onClick} style={style(color).buttonComponent}>
      <Typography variant={textVariant} color={colorVariantMap[variant]}>
        {text}
      </Typography>
    </button>
  );
};
