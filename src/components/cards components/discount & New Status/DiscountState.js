import React from "react";
import { Box } from "@mui/material";

const DiscountState = ({ bgColor, children }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        bgcolor: `${bgColor}`,
        color: "#FAFAFA",
      }}
      top={12}
      left={12}
      m={0}
      px={1.5}
      py={0.5}
      fontSize={12}
      borderRadius={1}
    >
      {children}
    </Box>
  );
};

export default DiscountState;
