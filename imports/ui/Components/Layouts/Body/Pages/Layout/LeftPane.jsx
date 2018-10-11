import  React, {Component}  from "react";
import Paper from '@material-ui/core/Paper';



export default class LeftPane extends Component {


    render(){
  
      return (
          <Paper style={this.props.styles.Paper}> 
                  
                  <h1> LeftPane Page shows under Here !</h1> 
             
                  
          </Paper>
             
      );
    }
  
  } 