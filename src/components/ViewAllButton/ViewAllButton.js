import React from "react";
import { Button } from "@mui/material";

const ViewAllButton = ({ children }) => {
  return (
    <div>
      <Button
        sx={{
          color: "#FAFAFA",
          paddingX: "2rem",
          paddingY: "1rem",
          bgcolor: "#DB4444",
          "&:hover": {
            bgcolor: "#000000",
          },
        }}
      >
        {children}
      </Button>
    </div>
  );
};

export default ViewAllButton;
