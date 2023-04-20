import "./Iteam2.css"

import Image from "./Components/Image2/Image"
import Title2 from "./Components/Title2/Title"
import Subtitle from "./Components/Subtitle/Subtitle"
import ActionButton from "./Components/ActionButton/ActionButton"


function Iteam2() {
    return (
      <div  ClassName="two-col2">
        <Image/>
        <Title2 text="Women’s Collections"/>
        <Subtitle text="Featured woman collections that give you another vibe."/>
        <ActionButton/>
      </div>
    );
  }
  
  export default Iteam2;