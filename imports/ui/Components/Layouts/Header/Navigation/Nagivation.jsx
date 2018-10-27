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
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});


class Navigation extends Component {

  // Define the defaults values and received props
  constructor(props) {
      super(props);
      this.state = {

        left: false,
        change: false,
        mobileOpen: false,
      }

   }

   toggleDrawer = () => () => {
    this.setState({
           mobileOpen: !state.mobileOpen,
    });
  };




  render(){

    console.log(this.state.change);

    return (
        <div> 
          
                <AppBar  position="static" z-index={2}>
                      <Toolbar>
                        <IconButton
                          color="inherit"
                          aria-label="Open drawer"
                          onClick={this.toggleDrawer}
                        >
                          <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" >
                        {this.props.title}
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
                        <Button color="inherit" onClick={() => {this.setState( {change: !this.state.change}) } } >Login</Button>
                        
                      </Toolbar>
                </AppBar>
                <Hidden smUp implementation="css">
                 <Drawer
                      variant="temporary"
                      
                      open={this.state.mobileOpen}
                      onClose={this.toggleDrawer}
                      onOpen={this.toggleDrawer}
                      ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                      }}
                  >

                    {logInDrawer}
                  
                  </Drawer>
                  </Hidden>
                  
                  <Typography variant="h6" color="inherit" >
                      my data here
                        </Typography>
                
                </div> 
     
    );
   
  }

} 

export default withStyles(styles, { withTheme: true })(Navigation);