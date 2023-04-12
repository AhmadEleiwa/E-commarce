import React from "react";
import { Box } from "@mui/material";

const DiscountState = ({ discountValue }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        bgcolor: "#DB4444",
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
      -{discountValue}%
    </Box>
  );
};

export default DiscountState;
