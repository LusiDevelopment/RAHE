import  React, {Component}  from "react";
import {Link} from 'react-router-dom';
import AccountsUIWrapper from "../../../../AccountsUI/AccountsUI";

export default class Navigation extends Component {



  render(){

    return (
        <div> 
                
                <h3> Navigate Page shows Heres !</h3>  
                <AccountsUIWrapper/>
                <ul>
                       <li> <Link to="/" > Home</Link> </li> 
                       <li> <Link to="/accounts" > Accounts</Link> </li> 
                       <li> <Link to="/tasks" > Tasks List</Link> </li> 
                     
                       <li> <Link to="/test" > Test Page</Link> </li> 
                
                </ul>
                
                
        </div>
           
    );
  }

} 