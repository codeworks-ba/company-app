import React, { useState } from 'react';
import { Tab } from '../Tab/Tab';
import { styles } from './TabGroup.styles';
import { useNavigate } from 'react-router-dom';

type TabGroupProps<T = string> = {
  tabs: Record<string, string>;
  defaultTab?: T;
};

export const TabGroup: React.FC<TabGroupProps> = ({ tabs, defaultTab }) => {
  const [selected, setSelected] = useState<string>(defaultTab ?? tabs[0]);

  const navigate = useNavigate();

  const navigateTo = (tab: string) => {
    setSelected(tab);
    navigate(tab);
  };

  return (
    <div style={styles.wrapper}>
      {Object.entries(tabs).map(([key, value]) => (
        <Tab
          key={key}
          text={value}
          selected={selected === key}
          onClick={() => navigateTo(key)}
        />
      ))}
    </div>
  );
};
