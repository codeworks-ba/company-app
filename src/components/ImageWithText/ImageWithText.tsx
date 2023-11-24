import React from 'react';
import { styles } from './ImageWithText.styles';
import { Typography } from '../Typography/Typography';

type ImageWithTextProps = {
  image: string;
  header: string;
  subtitle?: string;
};

export const ImageWithText: React.FC<ImageWithTextProps> = ({
  image,
  header,
  subtitle = '',
  ...rest
}) => {
  return (
    <div style={styles.imageContainer}>
      <img src={image} alt="imageFailedToRender" style={styles.imageStyle} />
      <div style={styles.textContainer}>
        <div style={{ marginLeft: '10%' }}>
          <Typography text={header} size={'l'} font={'InterBold'} />
          <Typography text={subtitle} size={'m'} font={'InterLight'} />
        </div>
      </div>
    </div>
  );
};
