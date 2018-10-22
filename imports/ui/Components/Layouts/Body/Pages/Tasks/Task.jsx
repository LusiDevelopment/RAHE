import  React, {Component}  from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default class Task extends Component {



  render(){

    return (
         
               

      <li> 
      {this.props.task.text}                   
      </li>
           
    );
  }

} 