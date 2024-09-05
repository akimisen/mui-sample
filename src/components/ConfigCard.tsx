'use client'

import React from 'react';
import { Card, CardContent, Checkbox, FormControlLabel, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';

interface ConfigCardProps {
  // Add any specific props you need
}

export default function ConfigCard({ }: ConfigCardProps) {
  const [checkboxStates, setCheckboxStates] = React.useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
  });
  const [selectValue1, setSelectValue1] = React.useState('');
  const [selectValue2, setSelectValue2] = React.useState('');

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxStates({
      ...checkboxStates,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Card sx={{ 
        minWidth: 275, 
        minHeight: 120,
        bgcolor: 'background.paper',
        marginBottom: 2,
      }}>
        <CardContent>
          <Box display="flex" flexDirection="column" gap={1.2}> {/* 增加垂直间距 */}
            <Box 
              display="flex" 
              flexWrap="wrap" 
              gap={1.2} // 增加水平和垂直间距
              alignItems="center" // 垂直居中对齐项目
            >
              {Object.entries(checkboxStates).map(([key, value]) => (
                <FormControlLabel
                  key={key}
                  control={
                    <Checkbox
                      checked={value}
                      onChange={handleCheckboxChange}
                      name={key}
                    />
                  }
                  label={`Configuration ${key}`}
                  sx={{
                    height: '30px', // 设置固定高度
                    margin: 0, // 移除默认边距
                  }}
                />
              ))}
              <FormControl sx={{ minWidth: 120, height: '30px' }}> {/* 设置固定高度 */}
                <InputLabel id="config-select-label-1">Select Option</InputLabel>
                <Select
                  labelId="config-select-label-1"
                  value={selectValue1}
                  label="Select Option"
                  onChange={(e) => setSelectValue1(e.target.value as string)}
                >
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                  <MenuItem value="option3">Option 3</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ minWidth: 120, height: '30px' }}> {/* 设置固定高度 */}
                <InputLabel id="config-select-label-2">Another Select</InputLabel>
                <Select
                  labelId="config-select-label-2"
                  value={selectValue2}
                  label="Another Select"
                  onChange={(e) => setSelectValue2(e.target.value as string)}
                >
                  <MenuItem value="optionA">Option A</MenuItem>
                  <MenuItem value="optionB">Option B</MenuItem>
                  <MenuItem value="optionC">Option C</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </CardContent>
    </Card>
  );
}