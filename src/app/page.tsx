'use client'

import React from 'react';
import VerticalTabs from '@/components/Tabs';
import TaskGrid from '@/components/TaskGrid';

const tabContents = [
  { label: 'Task 1', content: <TaskGrid key="grid1" /> },
  { label: 'Task 2', content: <TaskGrid key="grid2" /> },
  { label: 'Task 3', content: <TaskGrid key="grid3" /> },
];

export default function Home() {
  return <VerticalTabs tabContents={tabContents} />;
}