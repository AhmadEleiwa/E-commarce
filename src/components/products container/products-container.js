import React from "react";
import Card from "../cards components/card/card";
import { Container } from "@mui/material";
import productsData from "../cards components/card data/products data";
const ProductsContainer = ({ title, image, price, rate, count, id }) => {
  // const cardProps = {
  //   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //   title: "Example Card",
  //   price: 19.99,
  //   rating: { rate: 4.5, count: 10 },
  //   id: 1,
  // };
  return (
    <div>
      <Container sx={{ display: "flex" }}>
        {productsData.map((item) => (
          <Card {...item} />
        ))}

        {/* <Card {...cardProps} /> */}
      </Container>
    </div>
  );
};

export default ProductsContainer;
