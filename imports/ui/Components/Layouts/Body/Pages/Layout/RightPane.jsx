import  React, {Component}  from "react";
import {Route, Switch} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { Mongo } from 'meteor/mongo';

import Home from "../Home/Home";
import Accounts from "../Accounts/Acounts";
import Error404 from "../Error404/Error404";
import TasksList from "../Tasks/Tasks.jsx";
import NewTaskForm from "../Tasks/newTask/newTaskForm";

import {TasksCollection} from '../../../../../../api/Schema/Schemas.jsx'
import Test from "../Test/Test";


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
                                path="/newtask" 
                                component={NewTaskForm} 
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
             
      );
    }
  
  } 