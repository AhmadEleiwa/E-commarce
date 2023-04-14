import React from "react";
import { useState } from "react";
import styles from "./card.module.css";

import { Paper, Typography, Rating, Box } from "@mui/material";
import LikeIconButton from "../LikeIconButton/LikeIconButton";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import DiscountState from "../discountState/DiscountState";
const Card = (props) => {
  const {
    image,
    title,
    price,
    rating: { rate, count },
    id,
    showDiscount,
    showOldPrice,
  } = props;

  // values which data doesnt have
  const oldPrice = (price + 15).toFixed(2);
  const discountValue = (((oldPrice - price) / oldPrice) * 100).toFixed(0);
  // let showDiscount = true;

  const [showAddToCart, setShowAddToCart] = useState(false);
  const handleMouseEnter = () => {
    setShowAddToCart(true);
  };

  const handleMouseLeave = () => {
    setShowAddToCart(false);
  };

  return (
    <Paper
      elevation={0}
      sx={{ position: "relative", marginRight: "2rem" }}
      key={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box sx={{ position: "relative" }}>
        <img src={image} alt={title} className={styles.productImg} />
        {showAddToCart && <AddToCartButton />}
      </Box>
      <LikeIconButton />
      <Typography
        variant="subtitle1"
        component="h1"
        overflow="hidden"
        sx={{ maxHeight: "2rem" }}
      >
        {title}
      </Typography>
      <Box display={showOldPrice === false ? "flex" : "block"}>
        {" "}
        <Typography variant="subtitle1" component="span" mr={1.5}>
          {price}$
        </Typography>
        {showOldPrice === true && (
          <Typography variant="subtitle1" component="del">
            {oldPrice}$
          </Typography>
        )}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Rating name="read-only" value={rate} readOnly precision={0.5} />
          <Typography variant="subtitle1" component="label" ml={1}>
            ({count})
          </Typography>
        </Box>
        {showDiscount === true && (
          <DiscountState discountValue={discountValue} />
        )}
      </Box>
    </Paper>
  );
};

export default Card;
