import { Meteor } from 'meteor/meteor';
//import { Mongo } from 'meteor/mongo';

//import {Tasks} from '../imports/api/Collections/Tasks'
import { TasksCollection } from '../imports/api/Schema/Schemas.jsx';
import  '../imports/api/Schema/Schemas.jsx'
 

Meteor.startup(() => {
  // code to run on server at startup
  
  Meteor.publish('tasks', function tasksPublication() {
    return TasksCollection.find();
  });

});
