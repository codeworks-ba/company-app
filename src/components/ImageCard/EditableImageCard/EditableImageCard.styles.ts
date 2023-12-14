import { makeStyles } from '../../../style/theme/MakeStyles';

export const styles = (error?: string) =>
  makeStyles({
    imageCardComponent: {
      width: '100%',
      height: '25%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative'
    },
    imageCardContainer: {
      width: '100%',
      height: '100%',
      border: error ? '1px solid red' : '1px solid #D4D4D4',
      borderRadius: 10,
      overflow: 'hidden',
      cursor: 'pointer',
      position: 'relative'
    },
    imageContainer: {
      width: '100%',
      height: '75%'
    },
    imageStyle: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
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
