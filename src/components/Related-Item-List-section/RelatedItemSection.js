import React from "react";
import ProductsList from "../ProductsList/ProductsList";
import Card from "../cards components/card/card";
import getRandomProducts from "../ProductsList/getRandomProducts/index";
const randomProductsArray = getRandomProducts();

const RelatedItemSection = () => {
  return (
    <div>
      <ProductsList
        subtitle="Related Item"
        ShowSubtitle={true}
        hideAllHeader={true}
      >
        {randomProductsArray.map((card, index) => (
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
      </ProductsList>
    </div>
  );
};

export default RelatedItemSection;
