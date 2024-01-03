import { makeStyles } from '../../style/theme/MakeStyles';

const typographyVariants = {
  headingBold: {},
  subHeadingBold: {},
  subHeadingNormal: {},
  bodyMedium: {},
  bodyBold: {},
  bodyNormal: {},
  bodySmall: {},
  bodySmallBold: {},
  smallButtonText: {}
};

export type TypographyVariants = keyof typeof typographyVariants;

export const styles = () =>
  makeStyles({
    headingBold: {
      fontFamily: 'InterBold',
      fontFamilyWeight: 'bold',
      fontSize: '32px',
      lineHeight: '41px',
      letterSpacing: '0px',
      color: '#0A0908'
    },
    subHeadingNormal: {
      fontFamily: 'InterRegular',
      fontSize: '24px',
      lineHeight: '29px',
      fontFamilyWeight: 'normal',
      letterSpacing: '0px',
      color: '#0A0908'
    },
    subHeadingBold: {
      fontFamily: 'InterBold',
      fontSize: '24px',
      lineHeight: '29px',
      fontFamilyWeight: 'bold',
      letterSpacing: '0px',
      color: '#0A0908'
    },
    bodyMedium: {
      fontFamily: 'InterRegular',
      fontSize: '18px',
      lineHeight: '21px',
      letterSpacing: '0px',
      color: '#FFFFFF'
    },
    bodyBold: {
      fontFamily: 'InterBold',
      fontSize: '18px',
      lineHeight: '21px',
      fontFamilyWeight: 'bold',
      letterSpacing: '0px',
      color: '#0A0908'
    },
    bodyNormal: {
      fontFamily: 'InterRegular',
      fontSize: '18px',
      lineHeight: '21px',
      fontFamilyWeight: 'normal',
      letterSpacing: '0px',
      color: '#0A0908'
    },
    smallButtonText: {
      fontFamily: 'InterRegular',
      fontSize: '14px',
      lineHeight: '0',
      fontFamilyWeight: 'normal',
      letterSpacing: '0px',
      color: '#0A0908'
    },
    bodySmall: {
      fontFamily: 'InterRegular',
      fontSize: '14px',
      lineHeight: '1',
      fontFamilyWeight: 'normal',
      letterSpacing: '0px',
      color: '#0A0908'
    },
    bodySmallBold: {
      fontFamily: 'InterBold',
      fontSize: '14px',
      lineHeight: '1',
      fontFamilyWeight: 'bold',
      letterSpacing: '0px',
      color: '#0A0908'
    }
  });
