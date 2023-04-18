import React from "react";
import ProductsList from "../ProductsList/ProductsList";
import Card from "../cards components/Card";
import getRandomProducts from "../ProductsList/getRandomProducts/index";
const randomProductsArray = getRandomProducts();

const BestSellingProduct = () => {
  return (
      <ProductsList title="Best Selling Products" subtitle="This Month">
        {randomProductsArray.map((card, index) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            price={card.price}
            rating={card.rating}
            id={card.id}
            showDiscount={false}
            showOldPrice={true}
          />
        ))}
      </ProductsList>
  );
};

export default BestSellingProduct;
