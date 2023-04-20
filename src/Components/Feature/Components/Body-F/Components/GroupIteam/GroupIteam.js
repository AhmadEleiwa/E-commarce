import "./GroupItem.css"
import Iteam2 from './Components/Iteam2/Iteam2'
import Iteam3 from './Components/Iteam3/Iteam3.js'
import Iteam4 from './Components/Iteam4/Iteam4'


function GroupIteam() {
    return (
      <div className="two-col">
     <Iteam2/>
     <div className="two-col-row">
     <Iteam3/>
      <Iteam4/>
     </div>
    
      </div>
    );
  }
  
  export default GroupIteam;

