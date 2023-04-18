import React from "react";
import { Typography, Box } from "@mui/material";
import './style.css'
const DateTimeDisplay = ({ value, type }) => {
  const dotsColor = "#E07575";
  return (
    <Box ml={0} className="time-label"  >
      <Typography className="label" fontSize={'inherit'} fontWeight={500}>
        {type}
      </Typography>
      <Box display="flex">
        {type !== "Days" && (
          <Typography color={dotsColor} fontSize={'inherit'}>
            :
          </Typography>
        )}

        <Typography  fontSize={'inherit'} fontWeight={700}>
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default DateTimeDisplay;
