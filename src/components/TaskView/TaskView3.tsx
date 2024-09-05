import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

const TaskView3 = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Task 3 Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Section 1
              </Typography>
              <Typography variant="body2">
                This is a placeholder for the first section of Task 3. You can replace this with actual content or components.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Section 2
              </Typography>
              <Typography variant="body2">
                This is a placeholder for the second section of Task 3. You can replace this with actual content or components.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaskView3;