'use client'
import React from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { useState } from 'react';
import dayjs from 'dayjs';


export default function BasicDateRangeField() {
    const [value, setValue] = useState([
        dayjs('2022-04-17'),
        dayjs('2022-04-21'),
      ]);
    
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['MultiInputDateRangeField', 'SingleInputDateRangeField']}
      >
        <SingleInputDateRangeField label="Select Date Range" />
      </DemoContainer>
    </LocalizationProvider>
  
  );
}