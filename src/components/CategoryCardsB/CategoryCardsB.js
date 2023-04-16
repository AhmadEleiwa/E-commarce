import React from "react";
import { Paper, Box, Typography, Divider } from "@mui/material";
const CategoryCardsB = ({ title, children }) => {
  return (
    <div>
      <Paper
        elevation={0}
        variant={"outlined"}
        sx={{
          marginRight: "1.95rem",
          marginBottom: "4.4rem",
          fontSize: "3.5em",
          width: "170px",
          height: "145px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>{children}</Box>
        <Typography fontSize="16px">{title}</Typography>
      </Paper>
      <Divider />
    </div>
  );
};

export default CategoryCardsB;
