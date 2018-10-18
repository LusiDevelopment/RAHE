import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Tasks } from '../Schema/Schemas';


Meteor.methods({
  // 
  // Insert data into the DB 
  //

    'tasks.insert'(data) {
     // check(text, String);
   
      // Make sure the user is logged in before inserting a task
    //  if (! this.userId) {
    //    throw new Meteor.Error('not-authorized');
    //  }

 

 // if (data.title.length > 10)
  //  throw new Meteor.Error(413, 'Title  too long');
  //else{

      Tasks.insert({
      taskTitle: data.taskTitle,
      text: data.text, 
      taskId: data.taskId,
      creator: data.creator,
      responsible: data.responsible ,
      status: data.status ,
      comments: data.comments ,
      priority: data.priority ,
      category: data.category,
      createdAt: new Date(),
      targetCompletionDate: new Date() ,
     
    });    
  //} // End of else statement
   
     
    }, // End of insert method

  // 
  // Remove data into the DB 
  //
  
    'tasks.remove'(taskId) {
      check(taskId, String);
   
      tasksCollection.remove(taskId);
    },

  // 
  // Update data into the DB 
  //
  
    'tasks.setChecked'(taskId, setChecked) {
      check(taskId, String);
      check(setChecked, Boolean);
   
      tasksCollection.update(taskId, { $set: { checked: setChecked } });
    },


  });
