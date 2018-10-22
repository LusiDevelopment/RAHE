import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Tasks } from '../../../../../../api/Collections/Collections';

 

// App component - represents the whole app

// App component - represents the whole app
class TasksList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
            /* initial state */ 
         //   TasksCollection:[],
            textLoop:"test"
    };
  }   

  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }
 
  renderTasks() {
    console.log(Tasks.text);
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
 
  render() {
  //  Meteor.subscribe('tasks',TasksCollection._id);
   // console.log(this.props.TasksCollection.find());
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
       

        <div>
            <ul>
              {this.renderTasks()}
            </ul>
        </div>

        


      </div>
    );
  }
}


export default withTracker(({}) => {
  Meteor.subscribe('tasks');
  return {
   // tasks: TasksCollection.find({}).fetch(),
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
})(TasksList);