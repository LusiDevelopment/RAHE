import  React, {Component}  from "react";


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SendIcon from '@material-ui/icons/Send';


export default class Task extends Component {
     
  constructor(props) {
        super(props);
        this.state = { 
            
              open: false,
                
        };
      }  


      handleClick = () => {
        this.setState(state => ({ open: !state.open }));
      };

  render(){
    console.log(this.props.task.comments);
    return (
         
             <div>

                 <List
                    component="nav">

                        <ListItem button onClick={this.handleClick}>
                              <ListItemIcon>
                                  <StarBorder />
                              </ListItemIcon>
                              <ListItemText>
                                  {this.props.task.title}
                              </ListItemText>
                              {this.state.open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>

                        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            <ListItem button>
                              <ListItemIcon>
                                  <SendIcon />
                              </ListItemIcon>
                              <ListItemText>
                                  {this.props.task.comments.comment} 
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