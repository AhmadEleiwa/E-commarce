import React from "react";
import iconsArray from "./icons Data/iconsData";
import CategoryCardsB from "../CategoryCardsB/CategoryCardsB";
import ListSlider from "../ListSlider/index";
const BrowseByCategory = () => {
  return (
    <div>
      <div>
        <ListSlider
          subTitle="Our Products"
          title="Explore Our Products"
          showCounter={false}
          showViewBtn={false}
        >
          {iconsArray.map((item, index) => (
            <CategoryCardsB title={item.name} key={index}>
              {React.cloneElement(item.icon, {
                style: { fontSize: "inherit" },
              })}
            </CategoryCardsB>
          ))}
        </ListSlider>
      </div>
    </div>
  );
};

export default BrowseByCategory;
