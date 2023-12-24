import React, { useEffect, useState } from 'react';
import { Tab } from '../Tab/Tab';
import styles from './TabGroupStyles.module.css';
import { useNavigate } from 'react-router-dom';
import { MyBusiness, NavbarItems } from '../../../services/types';
import { DropdownTab } from '../Dropdown/Dropdown';

type TabGroupProps<T = string> = {
  tabs: Record<string, NavbarItems | MyBusiness>;
  defaultTab?: T;
};

export const TabGroup: React.FC<TabGroupProps> = ({ tabs, defaultTab }) => {
  const [selected, setSelected] = useState<string | undefined>(defaultTab);

  const navigate = useNavigate();

  const navigateTo = (tab: string) => {
    setSelected(tab);
    navigate(tab);
  };

  useEffect(() => {
    setSelected(defaultTab);
  }, [defaultTab]);

  return (
    <div className={styles.wrapper}>
      {Object.entries(tabs).map(([key, value]) =>
        'value' in value ? (
          <Tab
            key={key}
            text={(value as NavbarItems).value}
            selected={selected?.toLocaleLowerCase() === key.toLocaleLowerCase()}
            onClick={() => navigateTo(key)}
          />
        ) : (
          <DropdownTab
            key={key}
            text={(value as MyBusiness).title}
            dropdownItems={(value as MyBusiness).submenuItems}
            onClick={(id: string) => navigate(`/biznis/${id}`)}
          />
        )
      )}
    </div>
  );
};
