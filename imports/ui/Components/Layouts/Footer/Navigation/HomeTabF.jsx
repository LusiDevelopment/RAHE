import React, { Component } from 'react';


import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Grid from '@material-ui/core/Grid';

import { Tasks } from '../../../../../api/Collections/Tasks';

export default class HomeTab extends Component{

  getData(event,select){

    event.preventDefault();
   
   var inputData = Tasks.find().fetch();
   // console.log("Class before",inputData);
   console.log("DATA",inputData);
var i=0;
var status = [];
      inputData.map((field,keys) => {
        var fieldData =Object.keys(field);
        var fieldValue =Object.values(field);

      //  console.log("fieldObjectKeys:",fieldData,"field:",fieldValue, keys);

      //  if(fieldData[1]===select){
         
      //    status.push(fieldValue[1]);
        
     //  }


      fieldData.map((value,key)=>{
      //  console.log("value:", field[value]);
      

      //  console.log("setV:", fieldData[key]);

        if(fieldData[key]===select){
         
           status.push(field[value]);
         
        }

      });
        
  //console.log("value", value,"key",key) 
      }
        
        );

  //  console.log(status);
//  console.log("status",status);


  }
  

  render(){

    Meteor.subscribe('tasks');
    var select = 'priority'

    return (
      <div >
      <Grid container
           spacing={8}
             >
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
      <button onClick= {(event)=> this.getData(event,select)}   > Get Data </button>
    </div>
           
    );
  }
}


