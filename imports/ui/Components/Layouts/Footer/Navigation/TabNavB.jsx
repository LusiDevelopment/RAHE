import React, { Component } from 'react';
import {Tabs,Paper} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';

import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default class TabNavB extends Component{

  

  render(){
    
    return (
        <Paper> 
                <Tabs 
                    value={0}
                    indicatorColor="primary"
                    textColor="primary"
                    centered 
                >
                        <Tab label="All" /> 

                        {this.props.categories.map((category, i) => {     
                           // console.log(i);                 
                            // Return the element. Also pass key     
                            return (<Tab key={i} label={category} />) 
                         })}
                        
                   
                </Tabs>
                <BottomNavigation
                      
                      showLabels
                  
                    >
                      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                  </BottomNavigation>

        </Paper>
           
    );
  }
}


