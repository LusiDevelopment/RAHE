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

import  React, {Component,Fragment}  from "react";

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Body from "./Body/Body";
import { Paper, Grid } from "@material-ui/core";

import { withStyles } from '@material-ui/core/styles';

export default class Layout extends Component {

  // Define the defaults values and received props


  render(){
   
    return (

       <Fragment
          >
      
                <Header />
                
                <Body  />

                <Footer />

        </Fragment>
        
    );
  }

} 
