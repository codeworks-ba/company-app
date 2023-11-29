import { makeStyles } from '../../style/theme/MakeStyles';

export const styles = makeStyles({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  headerContainer: {
    marginTop: '46px',
    marginBottom: '64px'
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    width: 'min-content'
  },
  mainWidth: {
    width: '344px'
  },
  buttonWrapper: {
    marginTop: '4px',
    marginBottom: '16px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  lineWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '12px'
  },
  googleWrapper: {
    marginBottom: '46px',
    width: '344px',
    cursor: 'pointer'
  },
  googleContainer: {
    height: '34px',
    borderRadius: '25px',
    backgroundColor: '#EBEBEB',
    display: 'flex',
    flexDirection: 'row',
    padding: '0px 34px',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px'
  }
});
