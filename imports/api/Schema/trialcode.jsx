
TasksCollection.Schema = new SimpleSchema({
    taskTitle:{type:String},
    text: {type: String}, 
    taskId:{type:Number},
    creator:{type:String},
    responsible:{type:String},
    status:{type:Boolean},
    comments:{type:String, optional:true},
    priority:{type:Number},
    category:{type:String},
    createdAt:{type:Date},
    targetCompletionDate:{type:Date},
    
    
  });
  
  
  Meteor.methods({
    'tasks.insert'(text) {
      check(text, String);
   
      // Make sure the user is logged in before inserting a task
     // if (! this.userId) {
     //   throw new Meteor.Error('not-authorized');
     // }
   
      tasksCollection.insert({
        text,
        createdAt: new Date(),
      //  owner: this.userId,
       // username: Meteor.users.findOne(this.userId).username,
      });
    },
    'tasks.remove'(taskId) {
      check(taskId, String);
   
      tasksCollection.remove(taskId);
    },
    'tasks.setChecked'(taskId, setChecked) {
      check(taskId, String);
      check(setChecked, Boolean);
   
      tasksCollection.update(taskId, { $set: { checked: setChecked } });
    },
  });
  
  export default TasksCollection;

  <Route path="/tasks" component={TasksList}></Route>