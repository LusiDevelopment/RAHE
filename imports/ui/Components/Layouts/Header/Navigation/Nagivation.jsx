import  React, {Component}  from "react";
import {Link} from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from '@material-ui/core/SwipeableDrawer';

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

import { withStyles } from '@material-ui/core/styles';


import AccountsUIWrapper from "../../../../AccountsUI/AccountsUI";
import logInDrawer from "./LogInDrawer";
import MenuDrawer from "./MenuDrawer";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
 
 
});


class Navigation extends Component {

  // Define the defaults values and received props
  constructor(props) {
      super(props);
      
      this.state = {

    
       
      }

   }


 


  render(){

    

    const { classes, theme } = this.props;

    return (
        <div className={classes.toolbar}> 
          
                <AppBar  position="static" z-index={5} className={classes.appBar} >
                        <Toolbar>
                            <IconButton
                              color="inherit"
                              aria-label="Open drawer"
                              onClick={this.props.toggleDrawer}
                            >
                                  <MenuIcon />
                            </IconButton>
                        
                            <Typography variant="display1" color="inherit" className={classes.grow} >
                                  {this.props.title}
                            </Typography>
                       
                            <AccountsUIWrapper/>
                        
                      </Toolbar>
                     
                </AppBar>
         </div> 
     
    );
   
  }

} 

export default withStyles(styles, { withTheme: true })(Navigation);