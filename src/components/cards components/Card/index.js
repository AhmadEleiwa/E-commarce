import React from "react";
import { useState } from "react";
import styles from "./card.module.css";

import { Paper, Typography, Rating, Box } from "@mui/material";
import LikeIconButton from "../LikeIconButton/LikeIconButton";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import DiscountState from "../discount & New Status/DiscountState";
import ProductsColors from "../ProductsColors/ProductsColors";
const Card = (props) => {
  const {
    image,
    title,
    price,
    rating: { rate, count },
    id,
    showDiscount,
    showOldPrice,
    showColors,
    isNew,
  } = props;

  // values which data doesnt have => oldPrice, discountValie

  const oldPrice = (price + 15).toFixed(2);
  const discountValue = (((oldPrice - price) / oldPrice) * 100).toFixed(0);

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
      sx={{ position: "relative", marginRight: "2rem", maxWidth: "270px" }}
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
          <DiscountState bgColor="#DB4444">-{discountValue}%</DiscountState>
        )}
        {isNew === true && <DiscountState bgColor="#00FF66">NEW</DiscountState>}
      </Box>
      {showColors && (
        <Box display="flex">
          <ProductsColors />
        </Box>
      )}
    </Paper>
  );
};

Card.defaultProps = {
  title: "product name",
  price: 0,
  image:
    "https://previews.123rf.com/images/zo3listic/zo3listic1905/zo3listic190500065/125123076-shopping-bag-icon-shopping-bag-vector-icon.jpg",
  rating: { rate: 0, count: 0 },
  id: "id",
  showDiscount: true,
  showOldPrice: true,
  showColors: false,
  isNew: false,
};

export default Card;
