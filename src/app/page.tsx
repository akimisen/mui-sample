'use client'

import React from 'react';
import { Typography } from '@mui/material';

export default function HomePage() {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to the Dashboard
      </Typography>
      <Typography paragraph>
        This is the main dashboard page. You can add more content here.
      </Typography>
    </div>
  );
}