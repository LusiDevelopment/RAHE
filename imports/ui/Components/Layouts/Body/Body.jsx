import  React, {Component}  from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

 

import LeftPane from "./Pages/Layout/LeftPane";
import RightPane from "./Pages/Layout/RightPane";

const styles = {

    Paper:{
        padding:20,
        marginTop:20,
        marginBottom:20,
        height:500,
        overflowY:'auto'
    }

}

export default class Body extends Component {

//wrap="nowrap" 

  render(){

    return (
      <div>
      
            <Grid   container 
                    direction="row"
                    justify="space-evenly"
                    alignItems="center" 
                    spacing={8} > 
                    
                    <Grid item sm={12}>
                        <Paper>
                        <h1> Body Page shows under Heres !</h1>  </Paper>
                    
                    </Grid>
                    
                    <Grid  item sm={3} >
                        
                        <LeftPane styles={styles} />
                  
                    </Grid>
                    
                    <Grid  item sm={9} >
                    
                        <RightPane styles={styles} />
                    
                    </Grid>
                    
            </Grid>
       </div>
           
    );
  }

} 