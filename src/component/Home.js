import React, { Component } from "react";
import {connect} from "react-redux";

 class Home extends Component{

render(){
 
  return(
 <div>
    <div className="mainHome">

<div className="mainbuttonNAvBar" >
<button onClick={()=>{this.props.history.push('/login')}}>Login</button>
<button onClick={()=>{this.props.history.push('/signin')}}>Sign Up</button>
</div>
   



    
  </div>

  <div id="marqueeText">
<marquee>
Work's Are More Important to remember So, Use our Todo Tasker
</marquee>
   
  </div>
  <button id="getStarted" onClick={()=>{this.props.history.push('/login')}}>Get Started</button>
 </div>

    
  )
}

}
const mapStateToProps = (state ) => {
  return {
  name:state.name
  }
}




export default connect(mapStateToProps,null)(Home);