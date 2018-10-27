/* 
 *  Author: Annick K
 *  Created on: 2018-10-26
 *  Component: App
 * 
 *  Description: run the App and all the business logic of the App
 * 
 *  Changes and updates: 
 * 
*/

import React, {Component, Fragment}  from "react";

import {BrowserRouter as Router} from 'react-router-dom';

import Layout from "../Components/Layouts/Layouts";
import AppErrorBoundary from "./AppErrorHandling";

import CssBaseline from '@material-ui/core/CssBaseline';

export default class App extends Component {

    // Define the defaults values and set props and states of the App
    constructor(props) {
      super(props);
      this.state = {

            title: "Welcome to the title",
      }

   }

  render() {

    return (
       <Fragment>
          <CssBaseline />
          <AppErrorBoundary>

              <Router>

                <Layout/>
              
              </Router>

          </AppErrorBoundary>
      </Fragment>
       
       );
          
  }

} 