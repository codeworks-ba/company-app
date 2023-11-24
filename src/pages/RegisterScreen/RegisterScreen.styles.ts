import { makeStyles } from '../../style/theme/MakeStyles';

export const styles = makeStyles({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  headerContainer: {
    marginTop: '5%',
    marginBottom: '3%'
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column'
  },
  flexRowWithGap20: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20
  },
  flexRowWithGap10: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  flexColumnWithGap: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  },
  profilePictureContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
    alignItems: 'center'
  },
  alignStart: { display: 'flex', alignItems: 'flex-start' },
  profilePicture: {
    backgroundColor: '#EBEBEB',
    border: '1px solid #D4D4D4',
    borderRadius: 100,
    height: 150,
    width: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  headerImageText: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: 15,
    marginBottom: 10
  },
  headerImageContainer: {
    backgroundColor: '#EBEBEB',
    border: '1px solid #D4D4D4',
    borderRadius: 10,
    height: 150,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  headerImage: { height: '100%', width: '100%', objectFit: 'contain' }
});
