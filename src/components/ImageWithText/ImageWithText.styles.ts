import { makeStyles } from '../../style/theme/MakeStyles';

export const styles = makeStyles({
  imageContainer: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  textContainer: {
    position: 'absolute',
    bottom: '50px',
    left: '50px',
    right: '50px',
    display: 'flex',
    background: `linear-gradient(0deg, rgba(235,235,235,1) 0%, rgba(255,255,255,0) 100%)`
  }
});
