import React, { useState } from "react";
import style from "./FlashSaleContainer.module.css";
import Card from "../cards components/card/card";
import { Box, Container, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import productsData from "../cards components/products data/products data";
import ViewAllButton from "../ViewAllButton/ViewAllButton";
import Title from "../Title";
import SubTitle from "../SubTitle/index";
const FlashSaleContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // Number of cards to show at a time
  const cardsToShow = 4;
  // Calculate the width of each card based on number of cards to show
  const cardWidth = 100 / cardsToShow;

  // const handlePrevClick = () => {
  //   setActiveIndex((prevIndex) =>
  //     prevIndex === 0 ? productsData.length - 1 : prevIndex - 1
  //   );
  // };
  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex - cardsToShow < 0 ? 0 : prevIndex - cardsToShow
    );
  };

  // const handleNextClick = () => {
  //   setActiveIndex((prevIndex) => (prevIndex + 1) % productsData.length);
  //   console.log(activeIndex);
  // };
  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex + cardsToShow >= productsData.length
        ? activeIndex
        : prevIndex + cardsToShow
    );
  };

  // Create a subset of cards to display based on activeIndex and cardsToShow
  const displayedCards = productsData.slice(
    activeIndex,
    activeIndex + cardsToShow
  );

  return (
    <Container
      className={style.sliderConotainer}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box mb={7.5}>
        <SubTitle>Today’s</SubTitle>
        <Box
          mb={5}
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "50%",
            }}
          >
            <Title>Flash Sales</Title>
            <Title> timer</Title>
          </Box>
          <Box>
            <IconButton
              onClick={handlePrevClick}
              sx={{ color: "#000000" }}
              className={style.arrowButton}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              onClick={handleNextClick}
              sx={{ color: "#000000" }}
              className={style.arrowButton}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>

        <Box
          className="cardContainer"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          {displayedCards.map((card, index) => (
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              price={card.price}
              rating={card.rating}
              id={card.id}
              active={index === 0}
              width={`${cardWidth}%`}
            />
          ))}
        </Box>
      </Box>

      <ViewAllButton />
    </Container>
  );
};

export default FlashSaleContainer;
