import  React, {Component}  from "react";

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export default class Task extends Component {
     
  constructor(props) {
        super(props);
        this.state = { 
            
              open: true,
                
        };
      }  


      handleClick = () => {
        this.setState(state => ({ open: !state.open }));
      };

  render(){

    console.log(this.props.task);

    return (
         
             <div>

                 <List
                    component="nav"
                    subheader={<ListSubheader component="div">Tasks List Items</ListSubheader>}
                  >
                        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                          <ListItemIcon>
                                      <StarBorder />
                          </ListItemIcon>
                            <ListItemText >
                          {this.state.open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemText>
                          
                            <ListItem  button onClick={this.handleClick}>
                                  
                                  

                                  <ListItemText>
                                        
                                        {this.props.task.comments}
                                    
                                  </ListItemText>

                                  <ListItemText>
                                        
                                        {this.props.task.text}
                                    
                                  </ListItemText>

                            </ListItem>
                          </List>
                        </Collapse>

                  </List>      

            </div>  
                
    );
  }

} 