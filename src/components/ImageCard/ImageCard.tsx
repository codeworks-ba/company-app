import React from 'react';
import { ImageCardStyleProps, styles } from './ImageCard.styles';
import { Typography } from '../Typography/Typography';
import PlusCircle from '../../images/plusCircle.svg';

type ImageCardProps = {
  image?: string;
  headerText: string;
  subtitleText?: string;
  onClick: () => void;
} & ImageCardStyleProps;

export const ImageCard: React.FC<ImageCardProps> = ({
  image,
  headerText,
  subtitleText = '',
  onClick,
  type,
  ...rest
}) => {
  const style = styles({ type });
  return (
    <div style={style.imageCardContainer} onClick={onClick}>
      {image ? (
        <div style={style.imageContainer}>
          <img src={image} alt="imageFailedToRender" style={style.imageStyle} />
        </div>
      ) : (
        <div style={style.addImageContainer}>
          <img
            src={PlusCircle}
            alt="imageFailedToRender"
            style={{ width: '50%', height: '50%' }}
          />
        </div>
      )}

      {type === 'headerAndSubtitle' ? (
        <div style={style.imageCardComponent}>
          <Typography>{headerText}</Typography>
          <Typography>{subtitleText}</Typography>
        </div>
      ) : (
        <div style={style.imageCardComponent}>
          <Typography>{headerText}</Typography>
        </div>
      )}
    </div>
  );
};
