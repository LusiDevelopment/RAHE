import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../Schema/Schemas';

  
Meteor.publish('tasks', function tasksPublication() {
    return TasksCollection.find();
  });

