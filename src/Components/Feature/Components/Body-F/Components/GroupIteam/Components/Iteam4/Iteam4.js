import "./Iteam4.css"

import Image from "./Components/Image4/Image"
import Title from "./Components/Title/Title"
import Subtitle from "./Components/Subtitle/Subtitle"
import ActionButton from "./Components/ActionButton/ActionButton"

function Iteam4() {
    return (
      <div className="two-col4">
        <Image/>
        <Title text="Perfume"/>
        <Subtitle text="GUCCI INTENSE OUD EDP"/>
        <ActionButton/> 
      </div>
    );
  }
  
  export default Iteam4;