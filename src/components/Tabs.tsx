'use client'

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ConfigCard from './ConfigCard';

interface TabContent {
  label: string;
  content: React.ReactNode;
}

interface VerticalTabsProps {
  tabContents: TabContent[];
}

export default function VerticalTabs({ tabContents }: VerticalTabsProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', minWidth: 200 }}
      >
        {tabContents.map((tab, index) => (
          <Tab key={index} label={tab.label} {...a11yProps(index)} />
        ))}
      </Tabs>
      <Box sx={{ 
        flexGrow: 1, 
        p: 3, 
        height: '100%',
        display: 'flex', 
        flexDirection: 'column', 
        gap: 2,
        overflow: 'auto' // 防止出现滚动条
      }}>
        <ConfigCard />
        {tabContents[value].content}
      </Box>
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
