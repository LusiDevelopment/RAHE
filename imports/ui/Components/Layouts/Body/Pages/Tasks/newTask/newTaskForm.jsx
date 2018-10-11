import  React, {Component}  from "react";

import {TextField,FormControl,InputLabel,MenuItem,Checkbox,FormHelperText,Button,Select} from '@material-ui/core';

export default class newTaskForm extends Component {

    constructor(props){
        super(props);
    
        this.state ={
    
            count: 1,
            visible: true,

            taskTitle:'',
            text: '', 
            taskId:'',
            creator:'',
            responsible:'',
            status:'',
            comments:'',
            priority:'',
            category:'',
            createdAt:'',
            targetCompletionDate:'',
        };
    
    }

    handleChange = (event) => {
        const isCheckBox = event.target.type === "checkbox";

        this.setState({

            [event.target.name]: isCheckBox 
            ? event.target.checked
            : event.target.value
        });

    };

    
    handleSubmit = (event) => {
        
        event.preventDefault();

        console.log(this.state);
        // here we copy the data to our method .. call the method


    };
    
    
  componentDidMount(){

    console.log("NewTask did mounted...");
  }

  componentWillMount(){
    console.log("NewTask will mounted...");

  }

  componentWillUnmount(){

    console.log("NewTask will Unmounted...");
 
  }
      
      

  render(){
   // const { classes } = props;
    return (
        <div> 
                
                <h3> Add a new Task here!</h3>  

                <form className="new-task" onSubmit={this.handleSubmit} >

                <fieldset>
                    <legend>New Task Form</legend>
                            <div>
                                    <TextField
                                        label="Task Title"
                                        type="text"
                                        name="taskTitle"
                                        value={this.state.taskTitle}
                                        data-validators="isRequired,isAlpha"
                                        onChange={this.handleChange}
                                    
                                    />
                            </div>
                            
                            <div>
                                    <TextField
                                        label="Task Text"
                                        type="text"
                                        name="text"
                                        value={this.state.text}
                                        data-validators="isRequired,isAlpha"
                                        onChange={this.handleChange}
                                    
                                    />

                            </div>
                            
                            <div>
                                    <TextField
                                        label="Task ID"
                                        type="number"
                                        name="taskId"
                                        value="" //this value should only be displayed from props and generated automatically
                                        data-validators="isRequired,isAlpha"
                                        onChange={this.handleChange}
                                        
                                    />

                            </div>
                        
                            <div>
                            
                                    <TextField
                                        label="Task Author"
                                        type="text"
                                        name="creator"
                                        value={this.state.creator}
                                        data-validators="isRequired,isAlpha"
                                        onChange={this.handleChange}
                                        
                                    />
                            
                            </div>

                            <div>
                                    
                                    <TextField
                                        label="Task Resp"
                                        type="text"
                                        name="responsible"
                                        value={this.state.responsible}
                                        data-validators="isRequired,isAlpha"
                                        onChange={this.handleChange}
                                        
                                    />
                            
                            </div>

                            <div>
                                <FormControl required>
                                        <InputLabel>Status</InputLabel>
                                        <Select value={this.state.status} name="status" onChange={this.handleChange}>
                                        <MenuItem value=""><em>Please select this Task Status</em></MenuItem>
                                        <MenuItem value={1}>Done</MenuItem>
                                        <MenuItem value={2}>Open</MenuItem>
                                        <MenuItem value={3}>On going</MenuItem>
                                        </Select>
                                        <FormHelperText>Done:Task is Completed <br />
                                                        Open:Task not yet started <br />
                                                        On going: Task started but not Completed<br />
                                        </FormHelperText>
                                </FormControl>

                                
                            </div>

                            <div>
                                    
                                    <TextField
                                        label="Task Comments"
                                        style={{ margin: 8 }}
                                        type="text"
                                        name="comments"
                                        value={this.state.comments}
                                        data-validators="isRequired,isAlpha"
                                        onChange={this.handleChange}
                                        
                                    />
                            
                            </div>

                            <div>
                                <FormControl required>
                                        <InputLabel>Priority</InputLabel>
                                        <Select value={this.state.priority} name="priority" onChange={this.handleChange}>
                                        <MenuItem value=""><em>Please select this Task Priority</em></MenuItem>
                                        <MenuItem value={1}>High</MenuItem>
                                        <MenuItem value={2}>Low</MenuItem>
                                        <MenuItem value={3}>Normal</MenuItem>
                                        </Select>
                                        <FormHelperText>High:Task is Very Important <br />
                                                        Low:Task had no time constraint <br />
                                                        Normal : Task can be Completed Anytime<br />
                                        </FormHelperText>
                                </FormControl>

                                
                            </div>

                            <div>
                                <FormControl required>
                                        <InputLabel>Category</InputLabel>
                                        <Select value={this.state.category} name="category" onChange={this.handleChange}>
                                        <MenuItem value=""><em>Please select this Task Category</em></MenuItem>
                                        <MenuItem value={1}>High</MenuItem>
                                        <MenuItem value={2}>Low</MenuItem>
                                        <MenuItem value={3}>Normal</MenuItem>
                                        </Select>
                                        <FormHelperText>High:Task is Very Important <br />
                                                        Low:Task had no time constraint <br />
                                                        Normal : Task can be Completed Anytime<br />
                                        </FormHelperText>
                                </FormControl>

                                
                            </div>


                            <div>
        
                                <TextField
                                    id="date"
                                    label="CompletionDate"
                                    type="date"
                                    defaultValue="2018-11-21"
                                    name="targetCompletionDate"
                                   // onChange={this.handleChange} Need to clarify the value or date is send
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                            />            
                                
                            </div>
                            
                </fieldset>
         
                <Button variant="raised" type="submit">Save</Button>
              </form>
                
                
        </div>
           
    );
  }

} 