import React, { Component } from "react";
import {connect} from "react-redux";
import {registerUser,EmptyFieldLogin} from '../store/acion/index'
import  './style.css'
 class Signin extends Component{





render(){

  return(
    <div> 
    
{/* HEADER DIV */}
<div className="LoginS">
  Sigup
</div>



{/* BOTTOM MAIN DIV  */}

<div id="MainSignForm">
  {/* ENTRIES PART'S */}
<div id="subMain">
  
<h3>Register Yourself:</h3>
<input type="text" placeholder="Name*" id="nameUser" >

</input>
<input type="Email"  placeholder="Email*" id="emailUser">
  
</input>
<input type="Password" placeholder="Password**" id="passWord1">
  
</input>
<input type="Password" placeholder="Again Password**" id="passWord2">
  
</input>
<div className="buttonS">
<div className="clearAll" onClick={EmptyFieldLogin()}>Clear All</div>
<button id="loginButton" onClick={registerUser(this.props.history)}>Register Me</button>
</div>
Or
</div>



{/* LAST LINE FOR NEW USER */}
<div id="gotologin">
Already Registered User?
<button onClick={()=>this.props.history.push('/login')}>Login</button>

</div>


</div>



  </div>
    
  )
}

}
const mapStateToProps = (state ) => {
  return {
  name:state.name
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
   
    registerUser: () => dispatch({


    }),
    EmptyFieldLogin: () => dispatch({


    })
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Signin);