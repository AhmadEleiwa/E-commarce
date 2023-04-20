import "./Iteam1.css"

import Image from "./Components/Image/Image"
import Title from "./Components/Title/Title"
import Subtitle from "./Components/Subtitle/Subtitle"
import ActionButton from "./Components/ActionButton/ActionButton"



function Iteam1() {
    return (
      <div className="one-col">
        <Image />
        <Title text="PlayStation 5"/>
        <Subtitle text="Black and White version of the PS5 coming out on sale."/>
        <ActionButton/>
      </div>
    );
  }
  
  export default Iteam1;