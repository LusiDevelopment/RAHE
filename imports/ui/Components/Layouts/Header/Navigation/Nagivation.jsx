/* 
 *  Author: Annick K
 *  Created on: 2018-10-26
 *  Component: Navigation
 * 
 *  Description: the navigation Top of the App
 * 
 *  Changes and updates: 
 * 
*/

import  React, {Component}  from "react";
import {Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { withStyles } from '@material-ui/core/styles';


import AccountsUIWrapper from "../../../../AccountsUI/AccountsUI";
import Account from "../../../../AccountsUI/Accounts/Account";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    align:'center',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
 
 
});


class Navigation extends Component {

  // Define the defaults values and received props
  constructor(props) {
      super(props);
      
      
   }

  render(){

    const { classes, theme } = this.props;

    var navBarStyle ={
                    backgroundColor: "#B388FF"

    };

    return (
        <div className={classes.toolbar}> 
          
                <AppBar  style={navBarStyle} position="static" z-index={5} className={classes.appBar} >
                      
                        <Toolbar>
                            <IconButton
                              color="inherit"
                              aria-label="Open drawer"
                              onClick={this.props.toggleDrawer}
                            >
                                  <MenuIcon />
                            </IconButton>
                        
                            <Typography variant="display1" color="inherit" align='center' className={classes.grow} >
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