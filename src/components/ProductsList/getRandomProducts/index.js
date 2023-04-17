import React from "react";
import productsData from "../../products data/products data";

const getRandomProducts = () => {
  const getRandomIndexes = (arr) => {
    const indexes = [];

    for (let i = 0; i < 4; i++) {
      let randomIndex;

      do {
        randomIndex = Math.floor(Math.random() * arr.length);
      } while (indexes.includes(randomIndex));

      indexes.push(randomIndex);
    }

    return indexes;
  };
  const randomCardsIndex = getRandomIndexes(productsData);
  const randomProductsArray = [
    productsData[randomCardsIndex[0]],
    productsData[randomCardsIndex[1]],
    productsData[randomCardsIndex[2]],
    productsData[randomCardsIndex[3]],
  ];
  return randomProductsArray;
};

export default getRandomProducts;
