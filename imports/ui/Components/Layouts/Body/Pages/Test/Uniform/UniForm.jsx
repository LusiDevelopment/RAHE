import React, {Component}  from 'react';
import {ErrorsField,SubmitField,AutoField} from 'uniforms--material-ui';
import  {TasksSchema}  from '../../../../../../../api/Collections/Tasks';

import {Typography} from '@material-ui/core';
import MAutoForm from './MAutoForm';
import BeforeAfterWrapper from 'material-ui/internal/BeforeAfterWrapper';



export default class MyUniForm extends Component {

    constructor(props){
        super(props);
    
        this.state ={
    
            count: 1,
            visible: true,

            taskTitle:'',
            text: '', 
            taskId:'',
            creator:'',
            responsible:'',
            status:'',
            comments:'',
            priority:'',
            category:'',
            createdAt:'',
            targetCompletionDate:'',
            testV:'', 
        };
    
    }

    // Handle change on the Text fields
    handleChange = (key,value) => { 

      event.preventDefault();

      console.log("Key:", key, "Value:", value);
 

   }
 
    handleSubmit = (data) => {

      event.preventDefault();

      console.log("Data before:", data);
     
      // Here we send the data to our method .. call the method
    Meteor.call('tasks.insert', {...data}, (error,edata)=> {
      console.log("Data", edata,"Error",error);

       if(error){

        Bert.alert('Please LogIn','danger', 'fixed-top');
       }
    });

      console.log("Data after:", data);

    }
    
    
    componentDidMount(){

      console.log("Uniform did mounted...");
    }

    componentWillMount(){
      console.log("Uniform will mounted...");

    }

    componentWillUnmount(){

      console.log("Uniform will Unmounted...");
  
    }

    render(){
     
      return (
          <div> 
                <Typography variant="display1" component="h2">
                                UniForm
                </Typography> 

                <Typography variant="title" component="h2">
                        Add a new Task here!
                </Typography> 

                <MAutoForm
                      
                        schema={TasksSchema}
                        showInlineError={ true }
                        onSubmit={this.handleSubmit} 
                        validate="onSubmit"
                        onSubmitSuccess={() => console.log("Submit Success")}
                        onSubmitFailure={() => console.log("Submit Failed")}
                        onChange={(key, value) => this.handleChange(key, value)}

           
                >

                   
                      <AutoField  name="title"  />
                      <AutoField  name="text"  />

                      <AutoField  name="comments"  />

                      <AutoField name="author"/>
                      
                      <AutoField  name="responsible"  />

                      <AutoField  name="status"  />
                      <AutoField  name="priority"  />

                      <AutoField  name="category"  />
                      <AutoField  name="targetCompletionDate"  />


                      <ErrorsField />
                      <SubmitField />
    
                </MAutoForm>


          
          </div>
            
      );
    }
  
  } 

