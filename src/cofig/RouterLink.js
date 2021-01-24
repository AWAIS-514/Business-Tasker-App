import React, { Component } from 'react';

import Home from "../component/Home";
import Login from '../component/login'
import Signin from '../component/Signin'
import Seo from '../component/seoboard/seoboard'
import  CustomEmailVerification from '../component/customEmail'
import { BrowserRouter as Router,Route} from "react-router-dom";


class RouterLink extends Component{
render(){


  return(
 <Router>
    
     <Route exact path='/' component={Home} />
     <Route exact path='/signin' component={Signin} />
     <Route exact path='/login' component={Login} />
     <Route exact path='/seo' component={Seo} />
     <Route exact path='/CustomEmailVerification' component={CustomEmailVerification } />
 </Router>



  )
}
}


export default RouterLink;
