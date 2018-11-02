import  React, {Component}  from "react";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import PersonIcon from '@material-ui/icons/Person';
import {Typography} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';




export default class LeftPane extends Component {

  constructor(props) {
    super(props);
   // this.handleChange = this.handleChange.bind(this);
    this.state = {

      change: this.props.Open,
     
    }

 }
/*
 handleChange() {


  this.setState({ change: !this.state.change, });

  this.props.toggleDrawer();
}
*/

    render(){
  
      return (
        <div >
          <Grid container wrap="nowrap" spacing={24}>
              
                  <Paper style={this.props.styles.Paper}> 
                      <Grid item xs={12} >
                          <Divider/>
                              <Typography variant="display1" component="h2">
                                        LogIn Menu
                              </Typography> 

                                <Divider/>

                              <List component="nav">

                                  <Link to="/" >
                                    <ListItem button onClick={this.props.toggleDrawer}>
                                      <ListItemIcon>
                                         <HomeIcon/>
                                      </ListItemIcon>
                                      <ListItemText primary="Home" />
                                      </ListItem>
                                  </Link> 
                      

                                  <Divider/>

                                  
                                  <Link to="/accounts" > 
                                      <ListItem button>
                                        <ListItemIcon>
                                          <InboxIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Accounts" />
                                      </ListItem>
                                  
                                  </Link> 

                                  <Divider/>

                                 <Link to="/tasks" > 
                                    <ListItem button>
                                      <ListItemIcon>
                                        <InboxIcon />
                                      </ListItemIcon>
                                      <ListItemText primary="Tasks List" />
                                    </ListItem>
                                  
                                  </Link> 

                                  <Divider />
                                    <Link to="/test" > 
                                      <ListItem button>
                                      <ListItemIcon>
                                        <InboxIcon />
                                      </ListItemIcon>
                                      <ListItemText primary="Test Page" />
                                      </ListItem>

                                    </Link> 
                                  <Divider/>

                              </List>
                          </Grid>
                          <div >
                            <Grid  item xs={12} >
                                <Grid item xs={6} >
                                    <Avatar >
                                      <FolderIcon />
                                    </Avatar>
                                </Grid>

                                <Grid item xs={6} >
                                    <Avatar >
                                      <PageviewIcon />
                                    </Avatar>
                                </Grid>
                                <Grid item xs={6} >
                                    <Avatar >
                                      <AssignmentIcon />
                                      
                                 
                                    </Avatar>
                                </Grid>
                            </Grid>
                          </div>
                     
                  </Paper>
            
          </Grid>
        </div>
             
      );
    }
  
  } 