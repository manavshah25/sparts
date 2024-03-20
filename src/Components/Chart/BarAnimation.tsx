import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BarChart } from '@mui/x-charts/BarChart';
import { useState } from 'react';
const BarAnimation= (props:any ) =>{
  
  const [skipAnimation,setskipAnimation]=useState(false);
// for the dyanmic data of graph
  // const handleItemNbChange = (event: Event, newValue: number | number[]) => {
  //   if (typeof newValue !== 'number') {
  //     return;
  //   }
  //   setItemNb(newValue);
  // };
  // const handleSeriesNbChange = (event: Event, newValue: number | number[]) => {
  //   if (typeof newValue !== 'number') {
  //     return;
  //   }
  //   setSeriesNb(newValue);
  // };
  const seriesOne=[{ label:'FEE RECIEVED',data: [2,4,6] }];
  const seriesTwo=[{ label:'ACTIVE STUDENT',data: [2,4,8] },{ label:'DROPOUT STUDENTS',data: [1,3,1]}];
  return (
    <Box sx={{ width: '100%' }}>
      <BarChart
        height={300}
        xAxis={props.dataX}
         series={props.value? seriesOne: seriesTwo} 
       
        skipAnimation={skipAnimation}
      />
      
    </Box>
  );
}

export default BarAnimation;