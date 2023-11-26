import { makeStyles } from '../../../style/theme/MakeStyles';
import { themeColors } from '../../../style/theme/colors';

export const styles = ({ selected }: { selected: boolean }) =>
  makeStyles({
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      ...(selected
        ? {
            borderBottom: `4px solid ${themeColors.primaryColor}`
          }
        : {})
    }
  });
