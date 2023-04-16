import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ViewAllButton from "../ViewAllButton/ViewAllButton";

const NotFound = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box display="flex" flexDirection="column" alignItems="center" mb={10}>
        <Typography fontSize="110px" fontWeight="500" fontFamily="Inter">
          404 Not Found
        </Typography>
        <Typography fontSize="16px" fontWeight="400" fontFamily="Poppins">
          Your visited page not found. You may go home page.
        </Typography>
      </Box>

      <ViewAllButton>Back to home page</ViewAllButton>
    </Box>
  );
};

export default NotFound;
