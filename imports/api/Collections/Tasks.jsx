/* 
 *  Author: Annick K
 *  Created on: 2018-10-26
 *  Component: Tasks Collection
 * 
 *  Description: Db collection of the Tasks 
 * 
 *  Changes and updates: 
 * 
*/

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';


const Tasks = new Mongo.Collection('tasks');

const TasksSchema = new SimpleSchema({

    title:{
      type:String,
      label:"title",
      defaultValue:'task',
      min:3,
    },

    text: {
        type: String,
        label:"task text",
        defaultValue:'',
        min:3,
        max:100,
    }, 

    taskID:{
        type:Number,
        defaultValue:3,
        optional:true
    },

    author:{
        type:String,
        defaultValue:'',
        label:"created By",
     //   autoValue: function() {
     //       return this.Meteor.userId()
           
   //     }
    },

    responsible:{
        type:String,
        defaultValue:'',
        label:"responsible",
    },

    comments:{
        type:String, 
        defaultValue:'',
        label:"comments here",
        optional:true,
        custom: ()=> console.log("Server Simpl Schema"),
        
    },

    priority:{
        type: String,
        label:"priority",   
        allowedValues: [ 'High','Low','Normal'],
        defaultValue: 'Normal'
        
   },

      
   category:{
    type: String,
    label:"category",   
    allowedValues: [ 'Personal','Family','Private','Public','Work','Children'],
    defaultValue: 'Personal'

    },

    status:{
        type: String,
        label:"status",   
        allowedValues: ['Done', 'Open','Ongoing'],
        defaultValue: 'Open'
   },
    createdAt:{
        type:Date,
        optional:true,
       autoValue:  new Date,
     
    },
    targetCompletionDate:{
        type:Date,
        optional:true,
        
    },
    
  });


Tasks.attachSchema(TasksSchema);

/*
    Exports
*/

    export  {Tasks, TasksSchema}; 

/*
 *  Methods
 */

Meteor.methods({
    /*
        Insert data into the database
    */
  
      'tasks.insert'(data) {
    
     
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
     
        Tasks.remove(taskId);
      },
  
    // 
    // Update data into the DB 
    //
    
      'tasks.setChecked'(taskId, setChecked) {
     
        Tasks.update(taskId, { $set: { checked: setChecked } });
      },
  
  
    });
  