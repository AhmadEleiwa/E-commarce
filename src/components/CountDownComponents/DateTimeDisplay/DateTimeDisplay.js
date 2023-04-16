import React from "react";
import { Typography, Box } from "@mui/material";

const DateTimeDisplay = ({ value, type }) => {
  const dotsColor = "#E07575";
  return (
    <Box ml={2}>
      <Typography ml={2} fontSize={12} fontWeight={500}>
        {type}
      </Typography>
      <Box display="flex">
        {type !== "Days" && (
          <Typography mr={0} color={dotsColor} fontSize={32}>
            :
          </Typography>
        )}

        <Typography ml={2} fontSize={32} fontWeight={700}>
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default DateTimeDisplay;
