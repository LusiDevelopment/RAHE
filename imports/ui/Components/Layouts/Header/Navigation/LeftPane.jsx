/* 
 *  Author: Annick K
 *  Created on: 2018-10-26
 *  Component: LeftPane or Drawer
 * 
 *  Description: Drawer of the App
 * 
 *  Changes and updates: 
 *    2018-10-26: the method used to return the selected item is not efficient because 
 *                it create new function: Using arrow function create a new function on every render, 
 *                check stackoverflow.com/questions/45053622/…
 *                this need to be changed later
 * 
*/

import  React, {Component, Fragment}  from "react";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import {Typography} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from 'material-ui/IconButton';

import {Settings, Create, Contacts, Navigation } from '@material-ui/icons';
import ListIcon from '@material-ui/icons/List';

const styles = {

  largeIcon: {
    width: 60,
    height: 60,
  },

};

/* example of selectable

class ExtendedListItem extends Component {
  onClick=() => {
       this.props.onClick(this.props.id);
  }
  render(){
     const {id, children, ...others} = this.props;
     return <ListItem onClick={this.onClick} key={id} {...others}>{children}</ListItem>
  }
}
*/


export default class LeftPane extends Component {

  getLink(titleLink) {
     
      switch(titleLink){
        case 'Home':
              return "/";
          
        case 'Account Settings':
              return "/accounts";
            
        case 'New Task':
              return"/test";
          
        case 'List of Tasks':
              return "/tasks";
            
        default:
              return "/";
            
      }
 
}


  getIcon(titleIcon) {
     
      switch(titleIcon){
        case 'Home':
              return  <HomeIcon/> ;
          
        case 'Account Settings':
              return  <Settings />;
            
        case 'New Task':
              return  <ListIcon />;
          
        case 'List of Tasks':
              return    <Create /> ;
            
        default:
              return  <HomeIcon/>;
            
      }
 
}

  render(){
  
  //  this.props.drawerData.tab.map((data)=> (console.log("Mapped Data:",data)) ) ;
   //console.log("Mapped Data:",this.props.drawerData);


//const titleLink = this.props.drawerData.tab[0].title;

 

  // console.log("Link Ref:",this.getlinkfunction());

    return (
      <Fragment>
          <Grid container wrap="nowrap" spacing={0}>
              
                 
                      <Grid item >
                       
                              <Typography align="center" variant="display1" component="h2">
                                  {this.props.drawerData.title}
                              </Typography> 

                               

                              <List component="nav">
                                    {
                                      this.props.drawerData.tab.map((data)=> (
                                    
                                            <Link to={this.getLink(data.title)} >
                                                <ListItem button onClick={ ()=> this.props.onTabIsClicked(data.key) }  >
                                                  <ListItemIcon>
                                                    {this.getIcon(data.title)}
                                                  </ListItemIcon>
                                                  <ListItemText primary=  {data.title} />
                                                </ListItem>
                                                <Divider/>
                                            </Link> 
                                    ) ) 
                                  }

                              </List>
                          </Grid>
              </Grid>
              
              <Grid container wrap="nowrap" spacing={24}>
                          
                        
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                                        <Typography align="center" variant="body2" >
                                       Contatcts
                                      </Typography> 
                               
                                      <Contacts fontSize="large" nativeColor='blue' />
                                    
                                </Grid>

                                <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}  >
                                <Typography align="center" variant="body2" >
                                       Locations
                                      </Typography> 
                                    <Avatar >
                                      <Navigation />
                                    </Avatar>
                                </Grid>
                                <Grid item  xs={6} sm={6} md={6} lg={6} xl={6}  >
                                <Typography align="center" variant="body2" >
                                       More info
                                      </Typography> 
                                    <Avatar >
                                      <AssignmentIcon />
                                      
                                 
                                    </Avatar>
                                </Grid>
                          
              </Grid>
            </Fragment>
 
             
      );
    }
  
  } 