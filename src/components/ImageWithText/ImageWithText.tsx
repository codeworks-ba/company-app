import React from 'react';
import { styles } from './ImageWithText.styles';
import styled from './ImageWithTextStyles.module.css';

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
        <div>
          <div className={styled.headingBold}>{header}</div>
          <div className={styled.bodyNormal}>{subtitle}</div>
        </div>
      </div>
    </div>
  );
};
