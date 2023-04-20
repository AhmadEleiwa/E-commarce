import Rectangle from './Components/Rectangle/Rectangle'
import Title from './Components/Title/Title'
import SubTitle from './Components/SubTitle/subTitle'
import "./top.css"

function top() {
    return (
      <div className="top">
        <div className="row">
      <Rectangle/>
      <Title/>
      </div>
      <SubTitle/>
      </div>
    );
  }
  
  export default top;