import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Mongo } from 'meteor/mongo';
//import SimpleSchema from 'meteor/simpl-schema';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';


//SimpleSchema.extendOptions(['autoform']);

//import {TasksCollection} from '../Collections/Tasks.jsx';

export const TasksCollection = new Mongo.Collection('tasksCollection');

export const Tasks = new Mongo.Collection('tasks');

//export const Tasks = new Mongo.Collection('tasks');
 
export const TasksSchema = new SimpleSchema({

  taskTitle:{
      type:String,
      label:"Title",
      min:3,
    },
    text: {
        type: String,
        label:"Task text",
        min:3,
        max:100,
    }, 
    taskId:{
        type:Number,
    },
    creator:{
        type:String,
        label:"Created By",
    },
    responsible:{
        type:String,
        label:"Responsible",
    },
    status:{
        type: String,
        allowedValues: ['Done', 'Open','Ongoing'],
        defaultValue: 'Open'
    },
    comments:{
        type:String, 
        label:"Comments here",
        optional:true
        
    },
    priority:{
        type: String,
        allowedValues: ['High', 'Low','Normal'],
        defaultValue: 'Normal'
   },
    category:{
        type:String,
        label:"Categoty",
    },
    createdAt:{
        type:Date,
    },
    targetCompletionDate:{
        type:Date,
    },
    
  });

  TasksCollection.attachSchema(TasksSchema);