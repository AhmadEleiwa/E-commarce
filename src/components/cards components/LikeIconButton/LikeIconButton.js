import React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Box } from "@mui/material";

const LikeIconButton = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
      }}
      top={12}
      right={12}
      m={0}
    >
      {" "}
      <IconButton
        sx={{
          "&:hover": {
            bgcolor: "#FFFFFF",
          },
        }}
      >
        <FavoriteBorderIcon sx={{ color: "black" }} />
      </IconButton>
      <IconButton
        sx={{
          "&:hover": {
            bgcolor: "#FFFFFF",
          },
        }}
      >
        <RemoveRedEyeOutlinedIcon sx={{ color: "black" }} />
      </IconButton>
    </Box>
  );
};

export default LikeIconButton;
