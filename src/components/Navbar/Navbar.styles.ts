import { makeStyles } from '../../style/theme/MakeStyles';

export const styles = makeStyles({
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '113px',
    alignItems: 'center',
    padding: '0px 180px',
    gap: 46
  },
  titleWrapper: {
    display: 'flex',
    flex: 1,
    alignItems: 'center'
  },
  buttonsWrapper: {
    display: 'flex',
    gap: 12
  },
  logoStyle: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  }
});
