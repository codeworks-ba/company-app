import { makeStyles } from '../../style/theme/MakeStyles';

const typographyVariants = {
  headingBold: {},
  subHeadingBold: {},
  bodyMedium: {},
  bodyBold: {},
  bodyNormal: {}
};

export type TypographyVariants = keyof typeof typographyVariants;

export const styles = () =>
  makeStyles({
    headingBold: {
      font: 'Oxygen',
      fontWeight: 'bold',
      fontSize: '32px',
      lineHeight: '41px',
      letterSpacing: '0px',
      color: '#0A0908'
    },
    subHeadingBold: {
      font: 'Inter',
      fontSize: '24px',
      lineHeight: '29px',
      fontWeight: 'bold',
      letterSpacing: '0px',
      color: '#0A0908'
    },
    bodyMedium: {
      font: 'Inter',
      fontSize: '18px',
      lineHeight: '21px',
      letterSpacing: '0px',
      color: '#FFFFFF'
    },
    bodyBold: {
      font: 'Inter',
      fontSize: '18px',
      lineHeight: '21px',
      fontWeight: 'bold',
      letterSpacing: '0px',
      color: '#0A0908'
    },
    bodyNormal: {
      font: 'Inter',
      fontSize: '18px',
      lineHeight: '21px',
      fontWeight: 'normal',
      letterSpacing: '0px',
      color: '#0A0908'
    }
  });
