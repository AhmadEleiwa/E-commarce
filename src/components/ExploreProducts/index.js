import React from "react";
import ListSlider from "../ListSlider";
import Card from "../cards components/Card";
import productData from "../products data/products data";
import ProductsList from "../ProductsList/ProductsList";
import getRandomProducts from "../ProductsList/getRandomProducts/index";
import { Box } from "@mui/material";
const randomProductsArray = getRandomProducts();

const ExploreProducts = () => {
  return (
    <>
      <ListSlider
        subTitle="Our Products"
        title="Explore Our Products"
        showCounter={false}
        showViewBtn={false}
      >
        {productData.map((card, index) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            price={card.price}
            rating={card.rating}
            id={card.id}
            showDiscount={false}
            showOldPrice={false}
          />
        ))}
      </ListSlider>
      <Box mt={7.5}>
        <ProductsList hideAllHeader={true} showButtomButton={true}>
          {randomProductsArray.map((card, index) => (
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              price={card.price}
              rating={card.rating}
              id={card.id}
              showDiscount={false}
              showOldPrice={false}
              isNew={true}
              showColors={true}
            />
          ))}
        </ProductsList>
      </Box>
    </>

  );
};

export default ExploreProducts;
