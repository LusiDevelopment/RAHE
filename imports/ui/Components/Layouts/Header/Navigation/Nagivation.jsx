import  React, {Component}  from "react";
import {Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';

import AccountsUIWrapper from "../../../../AccountsUI/AccountsUI";

export default class Navigation extends Component {



  render(){

    return (
        <div> 
                
                <h3> Navigate Page shows Heres !</h3>  
               
                <ul>
                       <li> <Link to="/" > Home</Link> </li> 
                       <li> <Link to="/accounts" > Accounts</Link> </li> 
                       <li> <Link to="/tasks" > Tasks List</Link> </li> 
                     
                       <li> <Link to="/test" > Test Page</Link> </li> 
                
                </ul>
             

                <AppBar  >
                      <Toolbar>
                        <IconButton
                          color="inherit"
                          aria-label="Open drawer"
                         
                        >
                          <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" >
                          RAHE Application
                        </Typography>
                        <div>
                            <IconButton
                                  aria-haspopup="true"
                                  color="inherit"
                              >
                                      <AccountCircle />
                            </IconButton>
                              
                            <AccountsUIWrapper/>

                        </div>
                        <Button color="inherit">Login</Button>
                       
                      </Toolbar>
                </AppBar>
                
                
          </div>
                    
                
                
                
    
           
    );
  }

} 