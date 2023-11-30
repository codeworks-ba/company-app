import { makeStyles } from '../../style/theme/MakeStyles';

export const styles = makeStyles({
  entireScreenContainer: {
    height: '100%',
    overflow: 'scroll'
  },
  mainContainer: {
    padding: '0px 180px'
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column'
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  headerImageContainer: {
    width: '100%',
    height: '365px'
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  profilePictureContainer: {
    width: '350px',
    height: '350px',
    transform: 'translateY(-50%)'
  },
  profilePictureStyle: {
    borderRadius: 200,
    border: '1px solid #707070',
    width: '100%',
    height: '100%'
  },
  nameAndTagsWrapper: {
    marginLeft: '60px',
    marginTop: '44px',
    width: '64%'
  },
  tagWrapper: {
    marginTop: '16px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: '7px'
  },
  socialMediaWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
    flexWrap: 'wrap'
  },
  socialMediaContainer: {
    width: '70px',
    height: '70px'
  },
  socialMediaImageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 200,
    border: '1px solid #707070'
  },
  servicesWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: '34px',
    flexWrap: 'wrap'
  },
  serviceStyle: {
    height: '250px',
    width: '232px'
  },
  mainInformationWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '70px',
    marginBottom: '36px'
  },
  informationContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  informationContainerWithGap: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: '40px'
  }
});
