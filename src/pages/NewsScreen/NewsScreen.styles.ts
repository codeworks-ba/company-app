import { makeStyles } from '../../style/theme/MakeStyles';

export const styles = makeStyles({
  newsWrapper: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    padding: '0px 180px 34px',
    overflow: 'scroll'
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
  },
  mainImageWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: '83px'
  },
  mainImage: {
    width: '55%',
    height: '55%'
  },
  mainTextWrapper: {
    width: '38%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: '48px',
    alignItems: 'center'
  },
  secondaryNewsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '62px',
    width: '100%'
  },
  secondaryImage: {
    width: '406px',
    height: '305px',
    objectFit: 'cover',
    marginRight: '57px'
  },
  dateAndAuthorWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: '12px',
    width: 'max-content'
  },
  categoryWrapper: {
    width: 'max-content'
  },
  secondaryNewsTextWrapper: {
    marginTop: '34px',
    marginBottom: '34px',
    flex: 1
  }
});
