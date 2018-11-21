import React, { Component } from 'react';
import { Mongo } from 'meteor/mongo';

import { withTracker } from 'meteor/react-meteor-data';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import {Tasks} from '../../../../../../api/Collections/Tasks.jsx';

import Task from './Task';

// App component - represents the whole app

// App component - represents the whole 

class TasksList extends Component {

  constructor(props) {
    super(props);
    this.state = { 
       
            textLoop:"test"
    };
  }   


 
  renderTasks() {
    console.log("Tasks data",this.props.tasks);
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
 
  render() {
  //  Meteor.subscribe('tasks',TasksCollection._id);
   // console.log(this.props.TasksCollection.find());
    return (
      <div >
        
              <h1>Todo List</h1>
  
              <div>
                  
                    {this.renderTasks()}
                
              </div>

      </div>
    );
  }
}


export default withTracker(() => {
  
   const handleTasks = Meteor.subscribe('tasks');
    const loadingTasks = !handleTasks.ready();
    const getList = Tasks.find().fetch();
    const listExist = !loadingTasks && !!getList  
  return {
    //tasks: Tasks.find({}).fetch(),
    tasks: listExist? getList : [],
  };
})(TasksList);