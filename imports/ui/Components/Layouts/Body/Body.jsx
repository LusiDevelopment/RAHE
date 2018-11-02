import  React, {Component}  from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
 

import LeftPane from "./Pages/Layout/LeftPane";
import RightPane from "./Pages/Layout/RightPane";
import logInDrawer from "../Header/Navigation/LogInDrawer";

const styles = {

    Paper:{
        padding:20,
        marginTop:20,
        marginBottom:20,
        height:500,
        overflowY:'auto'
    },
    drawerH: {
        height: 'calc(100% - 264px)',
        top: 64
      }

}

class Body extends Component {

//wrap="nowrap" 
constructor(props) {
    super(props);
    
    this.state = {

     
     
    }

 }




  render(){
    const { classes } = this.props;
    return (
        <main>
          
            <Drawer
                   
                    open={this.props.Open}
                    onClose={this.props.toggleDrawer}
                    onKeyDown={this.props.toggleDrawer}
               
                >
                <div 
                    tabIndex={0}
                    role="button"
                    onClick={this.props.toggleDrawer}
                    onKeyDown={this.props.toggleDrawer}
                >
                    
                    <LeftPane styles={styles} toggleDrawer={this.toggleDrawer} Open={this.state.Open} />
                </div>
            </Drawer>
          
      
           
            <RightPane styles={styles} />
            
        </main>
            
      
           
    );
  }

} 

export default withStyles(styles)(Body);