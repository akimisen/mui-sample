import React from 'react';
import ConfigCard from '@/components/ConfigCard';
import DataGrid from '@/components/TaskDataGrid';
import { Box } from '@mui/material';
import { DRAWER_WIDTH } from '@/constants';  // 确保这个路径是正确的

const TaskView1 = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100%',
    }}>
      <ConfigCard />
      <Box sx={{ flexGrow: 1, overflow: 'auto', mt: 2 }}>
        <DataGrid />
      </Box>
    </Box>
  );
};

export default TaskView1;