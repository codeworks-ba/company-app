import React from 'react';
import profileImage from '../../images/user.png';
import { styles } from './ProfileButton.styles';

type ProfileButtonProps = {
  onClick: () => void;
};

export const ProfileButton: React.FC<ProfileButtonProps> = ({ onClick }) => {
  return (
    <button style={styles.wrapper} onClick={onClick}>
      <img style={styles.img} src={profileImage} alt="imageFailedToRender" />
    </button>
  );
};
