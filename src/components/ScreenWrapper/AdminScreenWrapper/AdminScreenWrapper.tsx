import React, { PropsWithChildren } from 'react';
import { styles } from './AdminScreenWrapper.styles';

export const AdminScreenWrapper: React.FC<PropsWithChildren> = ({
  children
}) => {
  return <div style={styles.container}>{children}</div>;
};
