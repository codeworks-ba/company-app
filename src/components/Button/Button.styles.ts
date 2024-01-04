import React from 'react';
import { makeStyles } from '../../style/theme/MakeStyles';
import { themeColors } from '../../style/theme/colors';

const VariantOptions = {
  filled: 'filled',
  outlined: 'outlined',
  transparent: 'transparent'
};

export type Variant = keyof typeof VariantOptions;

const variants = (color: string): { [key in Variant]: React.CSSProperties } => {
  return {
    filled: {
      backgroundColor: color,
      border: 'none'
    },
    outlined: {
      border: `1px solid ${themeColors.primaryColor}`,
      backgroundColor: 'transparent'
    },
    transparent: {
      border: 'none',
      backgroundColor: 'transparent'
    }
  };
};

export type ButtonStyleProps = {
  variant: Variant;
  customStyle?: React.CSSProperties;
};

export const styles =
  ({ variant, customStyle = {} }: ButtonStyleProps) =>
  (color: string) =>
    makeStyles({
      buttonComponent: {
        padding: '14px 24px',
        borderRadius: 24,
        cursor: 'pointer',
        ...customStyle,
        ...variants(color)[variant]
      }
    });
