import React from 'react';
import { Font, Size } from './Typography.types';
import { styles } from './Typography.styles';

type TypographyProps = {
  size?: Size;
  font?: Font;
  text: string;
  color?: string;
};

export const Typography: React.FC<TypographyProps> = ({
  size = 's',
  font = 'InterRegular',
  text,
  color = 'black',
  ...rest
}) => {
  const style = styles(color, font);
  const calculateSize = () => {
    switch (size) {
      case 'xs':
        return <h6 style={style.typographyComponent}>{text}</h6>;
      case 's':
        return <p style={style.typographyComponent}>{text}</p>;
      case 'm':
        return <h4 style={style.typographyComponent}>{text}</h4>;
      case 'l':
        return <h3 style={style.typographyComponent}>{text}</h3>;
      case 'xl':
        return <h2 style={style.typographyComponent}>{text}</h2>;
      case 'xxl':
        return <h1 style={style.typographyComponent}>{text}</h1>;
    }
  };

  return <>{calculateSize()}</>;
};
