import { makeStyles } from '../../style/theme/MakeStyles';

export const styles = (borderRadius: string, error?: string) =>
  makeStyles({
    imageWrapper: {
      width: '100%',
      height: '100%',
      borderRadius: borderRadius,
      backgroundColor: '#EBEBEB',
      border: error ? '1px solid red' : '1px solid #D4D4D4',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      cursor: 'pointer',
      overflow: 'hidden'
    },
    imageStyle: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  });
