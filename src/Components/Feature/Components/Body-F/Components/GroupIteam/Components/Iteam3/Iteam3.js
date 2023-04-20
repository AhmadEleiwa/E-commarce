
import "./Iteam3.css"

import Image from "./Components/Image3/Image"
import Title3 from "./Components/Title/Title"
import Subtitle from "./Components/Subtitle/Subtitle"
import ActionButton from "./Components/ActionButton/ActionButton"

function Iteam3() {
    return (
      <div className="two-col3">
        <Image/>
        <Title3 text="Speakers"/>
        <Subtitle text="Amazon wireless speakers" />
        <ActionButton/> 
      </div>
    );
  }
  
  export default Iteam3;