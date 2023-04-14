import React from "react";
import { Button } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";

const ViewAllButton = () => {
  return (
    <div>
      <Button
        size="large"
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
        View All Products
      </Button>
    </div>
  );
};

export default ViewAllButton;
