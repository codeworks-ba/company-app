import React from 'react';
import { styles } from './Wrapper.styles';

type WrapperProps = {
  children: JSX.Element;
};

export const ScreenWrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div style={styles.container}>{children}</div>;
};
