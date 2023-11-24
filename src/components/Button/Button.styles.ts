import React from 'react';
import { makeStyles } from '../../style/theme/MakeStyles';

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
      padding: 8,
      color: 'white',
      border: 'none'
    },
    outlined: {
      border: '1px solid #D4D4D4',
      backgroundColor: 'transparent',
      color: 'black'
    },
    transparent: {
      border: 'none',
      backgroundColor: 'transparent',
      color: 'black'
    }
  };
};

export type ButtonStyleProps = {
  variant: Variant;
};

export const styles =
  ({ variant }: ButtonStyleProps) =>
  (color: string) =>
    makeStyles({
      buttonComponent: {
        padding: 6,
        width: '100%',
        fontFamily: 'InterRegular',
        borderRadius: 18,
        ...variants(color)[variant]
      }
    });
