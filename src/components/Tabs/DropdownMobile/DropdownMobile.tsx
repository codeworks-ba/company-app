import React, { useState } from 'react';
import { MyBusinessItems } from '../../../services/types';
import styles from './DropdownMobileStyles.module.css';
import { Typography } from '../../Typography/Typography';
import { ChevronDown, ChevronUp } from 'react-feather';

type DropdownMobileProps = {
  text: string;
  dropdownItems: MyBusinessItems[];
};

export const DropdownMobile: React.FC<DropdownMobileProps> = ({
  text,
  dropdownItems
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className={styles.mainContainer}
      onClick={() =>
        setIsOpen((oldVal) => {
          return !oldVal;
        })
      }
    >
      <div className={styles.textContainer}>
        <Typography variant={'subHeadingBold'}>{text}</Typography>
        {isOpen ? <ChevronUp size={'28px'} /> : <ChevronDown size={'28px'} />}
      </div>
      {isOpen && (
        <div className={styles.menuItemsWrapper}>
          <div className={styles.menuItemsContainer}>
            {dropdownItems.map((item) => (
              <div className={styles.menuItemContainer} key={item.key}>
                <div className={styles.menuItem}>{item.value}</div>
                <div className={styles.line}></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
