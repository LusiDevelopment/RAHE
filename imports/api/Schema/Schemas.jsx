import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import SimpleSchema from 'simpl-schema';
import { Tasks, Classification } from '../Collections/Collections';

// 
// Create Schemas
//


// 
// Tasks Schema
//

function getClassification(classification) {
    
 //return   db.Classification.find({classification}).toArray();

 var sportsArray = Sports.find({classification}).fetch(); // fetch() returns a collection as an array
console.log(sportsArray);
 // convert sportArray into an array format autoForm can understand for selection options
 
 var sportsOptions = sportsArray.map( function (obj) {
     return {'label': obj.name, 'value': obj.name};
 });

}


const tasksSchema = new SimpleSchema({

    taskTitle:{
      type:String,
      label:"Title",
      defaultValue:'',
      min:3,
    },
    text: {
        type: String,
        label:"Task text",
        defaultValue:'',
        min:3,
        max:100,
    }, 
    taskId:{
        type:Number,
        defaultValue:3,
        optional:true
    },
    creator:{
        type:String,
        defaultValue:'',
        label:"Created By",
    },
    responsible:{
        type:String,
        defaultValue:'',
        label:"Responsible",
    },
    status:{
        type: String,
        allowedValues: ['Done', 'Open','Ongoing'],
        defaultValue: 'Open'
    },
    comments:{
        type:String, 
        defaultValue:'',
        label:"Comments here",
        optional:true
        
    },
    priority:{
        type: String,
        allowedValues: [ 'High','Low','Normal'],
        defaultValue: 'Normal'
   },
    category:{
        type:String,
        label:"Categoty",
        allowedValues: [ 'Personal','Family','Private','Public','Work','Children'],
        defaultValue: 'Personal'
    },
    createdAt:{
        type:Date,
        optional:true,
       autoValue: () => new Date 
    },
    targetCompletionDate:{
        type:Date,
        optional:true
    },
    
  });

// 
// Classification Schema
//
const classificationSchema = tasksSchema.pick(['status', 'priority','category']);



// 
// Attach Schemas
//


Tasks.attachSchema(tasksSchema);
Classification.attachSchema(classificationSchema)

// 
// Export Schemas
//

  export {Tasks,tasksSchema};