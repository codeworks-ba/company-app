import React, { useRef, useState } from 'react';
import { MyBusinessItems } from '../../../services/types';
import { Typography } from '../../Typography/Typography';
import styles from './DropdownStyles.module.css';
import { ChevronDown, ChevronUp } from 'react-feather';
import { useClickOutside } from '../../../hooks/useClickOutside';

type DropdownProps = {
  selected?: boolean;
  text: string;
  dropdownItems: MyBusinessItems[];
  onClick: (id: string) => void;
};

export const DropdownTab: React.FC<DropdownProps> = ({
  selected,
  text,
  onClick,
  dropdownItems
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  useClickOutside(wrapperRef, () => {
    setIsOpen(false);
  });

  return (
    <div
      className={styles.mainContainer}
      onClick={() =>
        setIsOpen((oldVal) => {
          return !oldVal;
        })
      }
      ref={wrapperRef}
    >
      <div className={styles.textContainer}>
        <Typography variant={'subHeadingBold'}>{text}</Typography>
        {isOpen ? <ChevronUp size={'28px'} /> : <ChevronDown size={'28px'} />}
      </div>
      {isOpen && (
        <div className={styles.menuItemsWrapper}>
          <div className={styles.menuItemsContainer}>
            {dropdownItems.map((item) => (
              <div
                className={styles.menuItemContainer}
                key={item.key}
                onClick={() => onClick(item.key)}
              >
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
