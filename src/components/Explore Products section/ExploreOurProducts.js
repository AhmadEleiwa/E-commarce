import React from "react";
import ListSlider from "../ListSlider";
import Card from "../cards components/card/card";
import productData from "../cards components/products data/products data";

const ExploreOurProducts = () => {
  return (
    <div>
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
    </div>
  );
};

export default ExploreOurProducts;
