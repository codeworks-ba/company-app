import React, { PropsWithChildren } from 'react';
import { TypographyVariants, styles } from './Typography.styles';
import { themeColors } from '../../style/theme/colors';

const colorVariants = {
  primary: themeColors.primaryTextColor,
  secondary: themeColors.secondaryTextColor
};

export type ColorVariants = keyof typeof colorVariants;

type TypographyProps = {
  variant?: TypographyVariants;
  color?: ColorVariants;
};

export const Typography: React.FC<PropsWithChildren<TypographyProps>> = ({
  variant = 'bodyNormal',
  color = 'primary',
  children
}) => {
  const style = styles();

  return (
    <div style={{ ...style[variant], color: colorVariants[color] }}>
      {children}
    </div>
  );
};
