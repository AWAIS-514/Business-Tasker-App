import React, { Component } from "react";
import {connect} from "react-redux";
import {  Email} from "../store/acion/index";





class CustomEmailVerification extends Component{
 





   foo =()=>{
  // FUNCTION FOR PUSH TO SIGNUP PAGE

 this.props.history.push('/signin')
}



render(){
 
  return(
  <div> 
    
{/* HEADER DIV */}
<div className="LoginS">
   Verification Link
</div>



{/* BOTTOM MAIN DIV  */}

<div id="MainLoginForm">
  {/* ENTRIES PART'S */}
<div id="subMain">
  
<h3>Verification Email link</h3>
<input type="text" placeholder="User Name" id="VerificationName">

</input>
<input type="email" placeholder="Email" id="VerificationEmail" >
  
</input>
<button id="loginButton" onClick={Email()} >
    Send
</button>

</div>

{/* LOGIN PICTURE'S LIKE GMAIL,FACEBOOK,MAIL */}



</div>


  </div>

    
  )
}

}
const mapStateToProps = (state ) => {
  return {
 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Email: () => dispatch({


     })
    
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(CustomEmailVerification);