import React from "react";
import iconsArray from "./icons Data/iconsData";
import CategoryCard from '../Category'
import ListSlider from "../ListSlider/index";
const BrowseByCategory = () => {
  return (

    <ListSlider
      subTitle="Categories"
      title="Browse By Category"
      showCounter={false}
      showViewBtn={false}
    >
      {iconsArray.map((item, index) => (
        <CategoryCard title={item.name} key={index} icon={React.cloneElement(item.icon, {
          style: { fontSize: "inherit" },
        })}>

        </CategoryCard>
      ))}
    </ListSlider>

  );
};

export default BrowseByCategory;
