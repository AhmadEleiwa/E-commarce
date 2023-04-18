import React from "react";
import { Button } from "@mui/material";

const AddToCartButton = () => {
  return (
      <Button
        disableElevation
        variant="contained"
        fullWidth
        
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          margin: "auto",
          marginBottom: 0,
          bgcolor: "#000000",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          "&:hover": {
            bgcolor: "#DB4444",
          },
        }}
      >
        Add to Cart
      </Button>
  );
};

export default AddToCartButton;
