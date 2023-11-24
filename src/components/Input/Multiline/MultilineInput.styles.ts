import { makeStyles } from '../../../style/theme/MakeStyles';

export const styles = makeStyles({
  multilineContainer: {
    position: 'relative'
  },
  inputContainerStyle: {
    position: 'relative',
    width: '-webkit-fill-available',
    padding: '8px',
    borderRadius: 8,
    border: '1px solid #D4D4D4',
    resize: 'none',
    fontFamily: 'InterRegular'
  },
  inputStyle: {
    position: 'absolute',
    bottom: '8px',
    right: '8px',
    color: 'gray'
  }
});
