import React from 'react';
import { Typography } from '../Typography/Typography';

type TitleAndTextProps = {
  title: string;
  text: string;
  secondText?: string;
};

export const TitleAndText: React.FC<TitleAndTextProps> = ({
  title,
  text,
  secondText = ''
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
      <div style={{ flex: 1 }}>
        <Typography variant={'bodyBold'}>{title}</Typography>
      </div>
      <div>
        <Typography variant={'bodyNormal'}>{text}</Typography>
        <Typography variant={'bodyNormal'}>{secondText}</Typography>
      </div>
    </div>
  );
};
