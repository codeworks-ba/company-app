import React from 'react';
import { makeStyles } from '../../style/theme/MakeStyles';
import { FieldError } from 'react-hook-form';
import { themeColors } from '../../style/theme/colors';

const TypeOptions = {
  search: 'search',
  input: 'input'
};

export type Type = keyof typeof TypeOptions;

const types = (error?: FieldError): { [key in Type]: React.CSSProperties } => {
  return {
    search: {
      border: error ? '1px solid red' : `1px solid ${themeColors.primaryColor}`,
      borderRadius: 23,
      width: '-webkit-fill-available',
      paddingLeft: 36
    },
    input: {
      border: error ? '1px solid red' : '1px solid #D4D4D4',
      borderRadius: '25px',
      paddingLeft: 16
    }
  };
};

export type InputStyleProps = {
  inputType?: Type;
};

export const styles =
  ({ inputType = 'input' }: InputStyleProps) =>
  (error?: FieldError) =>
    makeStyles({
      inputComponent: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        width: '-webkit-fill-available',
        fontFamily: 'InterRegular',
        ...types(error)[inputType]
      }
    });
