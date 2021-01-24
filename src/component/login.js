import React, { Component } from "react";
import {connect} from "react-redux";
import { google,gotoEmail,loginTOmyAccount} from '../store/acion/index'
import EmailIcon from '@material-ui/icons/Email';
import  {FaGoogle} from 'react-icons/fa';



class Login extends Component{
 





   foo =()=>{
  // FUNCTION FOR PUSH TO SIGNUP PAGE

 this.props.history.push('/signin')
}



render(){
 
  return(
  <div > 
    
{/* HEADER DIV */}
<div className="LoginS">
  Login
</div>



{/* BOTTOM MAIN DIV  */}

<div id="MainLoginForm">
  {/* ENTRIES PART'S */}
<div id="subMain">
  
<h3> Login to Your Account</h3>
<input type="text" placeholder="User Name*" id="LoginName">

</input>
<input type="password" placeholder="Password*" id="LoginPassword">
  
</input>
<button id="loginButton" onClick={loginTOmyAccount(this.props.history)}>Login</button>
Or
</div>
<p id="mainofLogin"></p>
{/* LOGIN PICTURE'S LIKE GMAIL,FACEBOOK,MAIL */}

<div className="LoginImages">


<FaGoogle onClick={google(this.props.history)} id="googleE" />
<EmailIcon onClick={gotoEmail(this.props.history)} id="EmailE"/>


</div>

{/* LAST LINE FOR NEW USER */}
<div id="gotoSignup">
New User?
<button onClick={()=>this.foo()}>Register</button>
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
    gotoEmail: () => dispatch({


     })
     ,
     google: () => dispatch({


    })
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);