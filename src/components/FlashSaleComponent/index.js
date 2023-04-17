import React from "react";
import ListSlider from "../ListSlider";
import Card from "../cards components/Card";
import productData from "../cards components/products data/products data";

const FlashSaleComponent = () => {
  return (
      <ListSlider
        subTitle="Today’s"
        title="Flash Sales"
        showCounter={true}
        showViewBtn={true}
      >
        {productData.map((card, index) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            price={card.price}
            rating={card.rating}
            id={card.id}
            showDiscount={true}
            showOldPrice={true}
          />
        ))}
      </ListSlider>
  );
};

export default FlashSaleComponent ;
