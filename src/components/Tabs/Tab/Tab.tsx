import React, { PropsWithChildren } from 'react';
import { Typography } from '../../Typography/Typography';
import { styles } from './Tab.styles';

type TabProps = {
  selected?: boolean;
  onClick: () => void;
  text: string;
};

export const Tab: React.FC<PropsWithChildren<TabProps>> = ({
  selected = false,
  onClick,
  text
}) => {
  const style = styles({ selected });

  console.log({ selected, text }, 'test 12');

  return (
    <div style={style.wrapper} onClick={onClick}>
      <Typography variant={'subHeadingBold'}>{text}</Typography>
    </div>
  );
};
