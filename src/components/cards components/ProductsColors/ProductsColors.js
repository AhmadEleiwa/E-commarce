import React from "react";
import { Box } from "@mui/material";
const ProductsColors = () => {
  return (
    <Box display="flex">
      <Box
        mr={1}
        width="20px"
        height="20px"
        borderRadius="50%"
        sx={{ border: "3px solid black", boxSizing: "border-box" }}
      >
        <Box
          width="14px"
          height="14px"
          borderRadius="50%"
          bgcolor="yellow"
        ></Box>
      </Box>

      <Box width="20px" height="20px" borderRadius="50%" bgcolor="red"></Box>
    </Box>
  );
};

export default ProductsColors;
