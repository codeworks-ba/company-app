import { makeStyles } from '../../style/theme/MakeStyles';

export const styles = makeStyles({
  container: {
    paddingLeft: 0,
    paddingRight: 0,
    width: '100%',
    background: 'white',
    height: '100vh',
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'cyan'
  },
  searchWrapper: {
    width: '55%',
    padding: '68px 0px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchInputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
    width: '100%'
  }
});
