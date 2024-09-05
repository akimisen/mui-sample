import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const TaskView2 = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="h5" gutterBottom>
          Task 2 Overview
        </Typography>
        <Typography variant="body1">
          This is a placeholder for Task 2 content. You can add specific components and logic for Task 2 here.
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Task 2 Details
        </Typography>
        <Typography variant="body2">
          Additional details or components for Task 2 can be added in this section.
        </Typography>
      </Paper>
    </Box>
  );
};

export default TaskView2;