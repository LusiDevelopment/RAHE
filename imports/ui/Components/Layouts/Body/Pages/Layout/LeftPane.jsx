import  React, {Component}  from "react";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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



export default class LeftPane extends Component {


    render(){
  
      return (
        <div >
          <Grid container wrap="nowrap" spacing={24}>
              
                  <Paper style={this.props.styles.Paper}> 
                      <Grid container item xs={12} spacing={24}>
                   
                              <Typography variant="display1" component="h2">
                                        Left Pane
                              </Typography> 

                                <Divider/>

                              <List component="nav">
                                  <ListItem button>
                                      <ListItemIcon>
                                        <InboxIcon />
                                      </ListItemIcon>
                                      <ListItemText primary="Home" />
                                  </ListItem>

                                  <Divider/>

                                  <ListItem button>
                                      <ListItemIcon>
                                        <PersonIcon />
                                      </ListItemIcon>
                                      <ListItemText primary="LogIn" />
                                  </ListItem>

                                  <Divider/>

                                  <ListItem button>
                                      <ListItemIcon>
                                        <PersonIcon />
                                      </ListItemIcon>
                                      <ListItemText primary="SignUp" />
                                  </ListItem>

                                  <Divider/>

                              </List>
                          </Grid>
                          <div >
                            <Grid container item xs={12} spacing={24}>
                                <Grid item xs={6} spacing={8}>
                                    <Avatar >
                                      <FolderIcon />
                                    </Avatar>
                                </Grid>

                                <Grid item xs={6} spacing={8}>
                                    <Avatar >
                                      <PageviewIcon />
                                    </Avatar>
                                </Grid>
                                <Grid item xs={6} spacing={8}>
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