import { makeStyles } from '../../style/theme/MakeStyles';

export const styles = makeStyles({
  newsWrapper: {
    padding: '0px 180px 34px'
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
    marginTop: '62px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  secondaryImage: {
    width: '406px',
    height: '305px',
    objectFit: 'cover',
    marginRight: '57px'
  },
  dateAndAuthorWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    gap: '12px',
    width: 'max-content'
  },
  categoryWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 'max-content'
  },
  secondaryNewsTextWrapper: {
    marginTop: '34px',
    marginBottom: '34px'
  }
});
