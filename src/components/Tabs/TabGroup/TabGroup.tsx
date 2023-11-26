import React, { useState } from 'react';
import { Tab } from '../Tab/Tab';
import { styles } from './TabGroup.styles';

type TabGroupProps<T = string> = {
  tabs: Array<T>;
  defaultTab?: T;
};

export const TabGroup: React.FC<TabGroupProps> = ({ tabs, defaultTab }) => {
  const [selected, setSelected] = useState<string>(defaultTab ?? tabs[0]);

  return (
    <div style={styles.wrapper}>
      {tabs.map((tab) => (
        <Tab
          key={tab}
          text={tab}
          selected={selected === tab}
          onClick={() => setSelected(tab)}
        />
      ))}
    </div>
  );
};
