import  React, {Component}  from "react";
import {Route, Switch} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Home from "../Home/Home";
import Accounts from "../Accounts/Acounts";
import Error404 from "../Error404/Error404";
import TasksList from "../Tasks/Tasks.jsx";
import Test from "../Test/Test";

import {TasksCollection} from '../../../../../../api/Schema/Schemas.jsx'


export default class RightPane extends Component {

    constructor(props) {
                super(props);
                this.state = { 
                        /* initial state */ 
                      //  TasksCollection:[],
                        textLoop:"test"
                };
              }    

        

    render(){
  
      //  Meteor.subscribe('tasks');
      //  console.log(TasksCollection)
      //console.log(TasksCollection.find().fetch());
      return (
        <div> 
          <Grid container wrap="nowrap" spacing={24}>   
              <Grid item xs>    
              <Paper style={this.props.styles.Paper}> 
                      
                      <h1> RightPane Page shows under Heres !</h1> 

                      <Switch>
      
                              <Route 
                                    exact path="/" 
                                    component={Home}
                              
                                    />
                          
                              <Route 
                                    path="/accounts" 
                                    component={Accounts} 
                                    />
      
                              <Route
                                    path='/tasks'
                                    render={(props) => <TasksList {...props} TasksCollection={TasksCollection} />}
                                    />



                                  <Route 
                                    path="/test" 
                                    component={Test} 
                                    />
                              

                              <Route 
                                    component={Error404}
                                    />
        
                      </Switch> 
                      
              </Paper>
          </Grid>
        </Grid>

      </div>
             
      );
    }
  
  } 