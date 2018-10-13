import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Mongo } from 'meteor/mongo';
//import SimpleSchema from 'meteor/simpl-schema';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';


//SimpleSchema.extendOptions(['autoform']);

//import {TasksCollection} from '../Collections/Tasks.jsx';

export const TasksCollection = new Mongo.Collection('tasksCollection');

//export const Tasks = new Mongo.Collection('tasks');
 
export const Taskschema = new SimpleSchema({

  taskTitle:{
      type:String,
    },
    text: {
        type: String,
    }, 
    taskId:{
        type:Number,
    },
    creator:{
        type:String,
    },
    responsible:{
        type:String,
    },
    status:{
        type: String,
        allowedValues: ['Done', 'Open','Ongoing'],
        defaultValue: 'Open'
    },
    comments:{
        type:String, 
        optional:true
        
    },
    priority:{
        type: String,
        allowedValues: ['High', 'Low','Normal'],
        defaultValue: 'Normal'
   },
    category:{
        type:String,
    },
    createdAt:{
        type:Date,
    },
    targetCompletionDate:{
        type:Date,
    },
    
  });
