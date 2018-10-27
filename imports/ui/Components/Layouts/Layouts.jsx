/* 
 *  Author: Annick K
 *  Created on: 2018-10-26
 *  Component: Layouts
 * 
 *  Description: The wrapper of all layout components, presentation of the App
 * 
 *  Changes and updates: 
 * 
*/

import  React, {Component}  from "react";

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Body from "./Body/Body";
import { Paper, Grid } from "@material-ui/core";

const paperStyle = {

  height: '85%',
  width: '85%',
  margin: '5%',
  textAlign: 'center',
  display: 'inline-block',
};


export default class Layout extends Component {

  // Define the defaults values and received props
  constructor(props) {
      super(props);
      this.state = {

            title: "Welcome to the title",
      }

   }

  render(){

    const title = "Welcome! this is ourr title";

    return (

      <div className={Layout} >
       <Grid container>
           <Grid item xs={12} xl={6} > 
            <Paper style={paperStyle} z-index={5} >
                <Header  className={Header} title = {title} />
                
                <Body className={Body} />

                <Footer className={Footer} />
              </Paper>
           </Grid>
          </Grid>
        
      </div>    
    );
  }

} 