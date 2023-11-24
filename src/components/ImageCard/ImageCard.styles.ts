import React from 'react';
import { makeStyles } from '../../style/theme/MakeStyles';

const TypeOptions = {
  headerAndSubtitle: 'headerAndSubtitle',
  header: 'header'
};

export type Type = keyof typeof TypeOptions;

const types: { [key in Type]: React.CSSProperties } = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerAndSubtitle: {
    paddingLeft: 12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
};

export type ImageCardStyleProps = {
  type: Type;
};

export const styles = ({ type }: ImageCardStyleProps) =>
  makeStyles({
    imageCardComponent: {
      width: '100%',
      height: '25%',
      ...types[type]
    },
    imageCardContainer: {
      width: '100%',
      height: '100%',
      border: '1px solid #D4D4D4',
      borderRadius: 10,
      overflow: 'hidden'
    },
    imageContainer: {
      width: '100%',
      height: '75%'
    },
    imageStyle: {
      width: '100%',
      height: '100%',
      objectFit: 'fill'
    },
    addImageContainer: {
      width: '100%',
      height: '75%',
      backgroundColor: '#EBEBEB',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
