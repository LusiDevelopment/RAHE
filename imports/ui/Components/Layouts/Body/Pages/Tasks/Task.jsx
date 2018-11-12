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
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';


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
             <Divider/>
                 <List
                    component="nav">

                        <ListItem button onClick={this.handleClick}>
                              <ListItemIcon>
                                  <StarBorder />
                              </ListItemIcon>
                              <ListItemText>
                              <input type=
                              "checkbox" />   {this.props.task.title}
                         
                              </ListItemText>
                              <ListItemText>
                              
                              {this.props.task.responsible}
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
                              </ListItemText> <br/>
                             
                              <ListItemText>
                                  {this.props.task.text} 
                              </ListItemText><br/>
                              
                        <spane>Status</spane>
                              <ListItemText>
                                   {this.props.task.status} 
                              </ListItemText>

                              <ListItemText>
                                  {this.props.task.priority} 
                              </ListItemText>

                              <ListItemText
                            
                              >
                              <TextField
                              required
                              label="Category"
                              defaultValue={this.props.task.category} 
                              margin="normal"
                              variant="outlined"
                            />
                              </ListItemText>

                            

                             

                            </ListItem>
                          </List>
                        </Collapse>

                  </List>  
                      
                  
            </div>  
           
                
    );
  }

} 