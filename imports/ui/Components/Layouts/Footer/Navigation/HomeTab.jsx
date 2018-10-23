import React, { Component } from 'react';
import {Tabs,Paper} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';

import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

export default class HomeTab extends Component{

  

  render(){
    
    return (
        <Paper> 
                 <Tabs
                      fullWidth
                      indicatorColor="secondary"
                      textColor="secondary"
                    >
                      <Tab icon={<PhoneIcon />} label="RECENTS" />
                      <Tab icon={<FavoriteIcon />} label="FAVORITES" />
                      <Tab icon={<PersonPinIcon />} label="NEARBY" />
                  </Tabs>

        </Paper>
           
    );
  }
}


