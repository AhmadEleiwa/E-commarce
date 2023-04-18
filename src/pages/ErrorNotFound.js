import React from "react";
import { Box, Typography } from "@mui/material";
import ViewAllButton from "../components/ViewAllButton/ViewAllButton";
import { Link } from "react-router-dom";

const ErrorNotFound = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" sx={{margin:'1em'}}>
      <Box display="flex" flexDirection="column" alignItems="center" mb={10}>
        <Typography fontSize="110px" fontWeight="500" fontFamily="Inter">
          404 Not Found
        </Typography>
        <Typography fontSize="16px" fontWeight="400" fontFamily="Poppins">
          Your visited page not found. You may go home page.
        </Typography>
      </Box>

      <ViewAllButton><Link to={'/'} style={{textDecoration:'none', color:'inherit'}}>Back to home page</Link></ViewAllButton>
    </Box>
  );
};

export default ErrorNotFound;
