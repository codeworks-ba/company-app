import { FieldError } from 'react-hook-form';
import { makeStyles } from '../../../style/theme/MakeStyles';

export type MultileInputStyleProps = {
  customStyle?: React.CSSProperties;
};

export const styles =
  ({ customStyle = {} }: MultileInputStyleProps) =>
  (error?: FieldError) =>
    makeStyles({
      multilineContainer: {
        position: 'relative'
      },
      inputContainerStyle: {
        position: 'relative',
        width: '-webkit-fill-available',
        padding: '8px',
        borderRadius: 8,
        border: error ? '1px solid red' : '1px solid #D4D4D4',
        resize: 'none',
        fontFamily: 'InterRegular',
        ...customStyle
      },
      inputStyle: {
        position: 'absolute',
        bottom: '15px',
        right: '15px',
        color: 'gray'
      }
    });
