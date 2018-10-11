import  React, {Component}  from "react";

import {Task} from "./Task";


//const tasksCollection = new Mongo.Collection('tasks');


export default class TasksList extends Component {


    renderTasks(){
           
      return this.props.tasksCollection.map((task) => (
        <Task key={task._id} task={task} />
      ));
//      return this.props.tasksCollection.text;
     
    }

  render(){

   console.log(typeof(this.props.tasksCollection))
    //console.log(this.getTasksByCategories())
    //this.getTasksByCategories();
    return (
        <div className="container"> 
               
                  <ul>
                
                  <Route path="/tasks" render={()=><TasksList tasksCollection={TasksCollection}/>}/>

                          {this.renderTasks()}
                      

                      </ul>
               
                  


        </div>
           
    );
  }

} 


