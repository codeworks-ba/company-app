import React from 'react';
import { Font, Size } from '../Typography/Typography.types';
import { Typography } from '../Typography/Typography';
import { styles } from './Tag.styles';

type TagProps = {
  text: string;
  textSize?: Size;
  textFont?: Font;
};

export const Tag: React.FC<TagProps> = ({
  text,
  textSize = 's',
  textFont = 'InterRegular',
  ...rest
}) => {
  return (
    <div style={styles.tagContainer}>
      <Typography>{text}</Typography>
    </div>
  );
};
