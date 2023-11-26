import React from 'react';
import { Decoration, Font, Size } from '../Typography/Typography.types';
import { Typography } from '../Typography/Typography';

type LinkProps = {
  text: string;
  link: string;
  color?: string;
  font?: Font;
  size?: Size;
  textDecoration?: Decoration;
};

export const Link: React.FC<LinkProps> = ({
  text,
  link,
  color = 'black',
  font = 'InterRegular',
  size,
  textDecoration = 'none',
  ...rest
}) => {
  return (
    <a href={link} style={{ textDecoration: textDecoration }}>
      <Typography>{text}</Typography>
    </a>
  );
};
