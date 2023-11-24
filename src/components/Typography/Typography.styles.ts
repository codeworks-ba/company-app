import { makeStyles } from '../../style/theme/MakeStyles';
import { Font } from './Typography.types';

export const styles = (color: string, font: Font) =>
  makeStyles({
    typographyComponent: {
      margin: 0,
      padding: 0,
      color: color,
      fontFamily: font
    }
  });
