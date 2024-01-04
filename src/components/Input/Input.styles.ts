import React from 'react';
import { makeStyles } from '../../style/theme/MakeStyles';
import { FieldError } from 'react-hook-form';
import { themeColors } from '../../style/theme/colors';

export type InputStyleProps = {
  customStyle?: React.CSSProperties;
};

export const styles =
  ({ customStyle = {} }: InputStyleProps) =>
  (error?: FieldError) =>
    makeStyles({
      inputComponent: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        border: error ? '1px solid red' : '1px solid #D4D4D4',
        borderRadius: '25px',
        paddingLeft: 16,
        width: '-webkit-fill-available',
        color: themeColors.primaryTextColor,
        fontFamily: 'InterRegular',
        ...customStyle
      }
    });
