import React from 'react';

export const makeStyles = <T extends { [key: string]: React.CSSProperties }>(
  styles: T
): T => {
  return styles;
};
