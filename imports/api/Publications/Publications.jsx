import { Meteor } from 'meteor/meteor';

import {Tasks} from '../Collections/Tasks'

if (Meteor.isServer) {
  

Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find();
  });


}