import React from 'react';
import { FieldError } from 'react-hook-form';
import { themeColors } from '../../../style/theme/colors';
import { makeStyles } from '../../../style/theme/MakeStyles';

export type SearchInputStyleProps = {
  customStyle?: React.CSSProperties;
};

export const styles =
  ({ customStyle = {} }: SearchInputStyleProps) =>
  (error?: FieldError) =>
    makeStyles({
      inputComponent: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        border: error
          ? '1px solid red'
          : `1px solid ${themeColors.primaryColor}`,
        borderRadius: 23,
        width: '-webkit-fill-available',
        paddingLeft: 36,
        color: themeColors.primaryTextColor,
        fontFamily: 'InterRegular',
        ...customStyle
      }
    });
