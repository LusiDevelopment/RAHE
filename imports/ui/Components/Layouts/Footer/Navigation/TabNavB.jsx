import React, { Component } from 'react';
import {Tabs,Paper} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';

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

        </Paper>
           
    );
  }
}


