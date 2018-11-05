import { Meteor } from 'meteor/meteor';

import {Tasks} from '../Collections/Tasks'



Meteor.publish('tasks', function tasksPublication() {
        
    return Tasks.find({author: this.userId});
  });


