import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/material";

import { IconButton } from "@mui/material";
import { useRef } from "react";
import { useState } from "react";

import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import CounterContainer from "../CountDownComponents/CounterContainer";
import ViewAllButton from "../ViewAllButton/ViewAllButton";

import "./style.css";
const ListSlider = (props) => {
  const { width, subTitle, title, showCounter, showViewBtn, children } = props;
  const slider = useRef();
  const [slidePos, setSlidePos] = useState(0);
  const slideRightHandler = (event) => {
    let s = slidePos + slider.current.offsetWidth;
    if (s >= slider.current.scrollWidth) {
      s = 0;
    }
    setSlidePos(s);
    slider.current.scrollTo(s, 0);
  };
  const slideLeftHandler = (event) => {
    let s = slidePos - slider.current.offsetWidth;
    if (s < 0) {
      s = 0;
    }
    setSlidePos(s);
    slider.current.scrollTo(s, 0);
  };

  return (
    <div className="slider" style={{ width: width ? width : "81.5%" }}>
      <div className="slider-header">
        <div className="slider-header-titles">
          <SubTitle>{subTitle}</SubTitle>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Title>{title}</Title>
            {showCounter === true && (
              <Box ml={7.5}>
                <CounterContainer saleDays={30} />
              </Box>
            )}
          </Box>
        </div>
        <div className="slider-header-controls">
          <IconButton onClick={slideLeftHandler}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton onClick={slideRightHandler}>
            <ArrowForwardIcon />
          </IconButton>
        </div>
      </div>
      <div className="list-slider" ref={slider}>
        {children}
      </div>
      {showViewBtn === true && (
        <Box
          display="flex"
          justifyContent="center
        "
        >
          <ViewAllButton />
        </Box>
      )}
    </div>
  );
};

export default ListSlider;
