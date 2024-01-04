import React, { PropsWithChildren } from 'react';
import { styles } from './ScreenWrapper.styles';

export const ScreenWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <div style={styles.container}>{children}</div>;
};
