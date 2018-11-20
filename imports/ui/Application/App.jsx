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

import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';

import {BrowserRouter as Router} from 'react-router-dom';

import Layout from "../Components/Layouts/Layouts";
import AppErrorBoundary from "./AppErrorHandling";

import CssBaseline from '@material-ui/core/CssBaseline';

import tasksReducer, {tasksInitialState} from './Reducers/tasksReducer';
import userReducer, {userInitialState} from './Reducers/userReducer';
import headerReducer, {headerInitialState} from './Reducers/headerReducer';

/*
  *      Initialize all store with the default values
*/
const initialState = {
    tasks: tasksInitialState,
    user: userInitialState,
    header: headerInitialState
};

/*
  *     Combine all imported reducers to be send to the store
*/
const allReducers = combineReducers({
    tasks: tasksReducer,
    user: userReducer,
    header: headerReducer
})

/*
  *     create store    
*/
const store = createStore(allReducers,
                          initialState,
                          window.devToolsExtension && window.devToolsExtension()
                          );


export default class App extends Component {

    // Define the defaults values and set props and states of the App

  render() {

    return (
       <Fragment>
          <CssBaseline />
          <AppErrorBoundary>

              <Router>

               <Provider store ={store} >

                  <Layout/>

               </Provider>
              
              </Router>

          </AppErrorBoundary>
      </Fragment>
       
       );
          
  }

} 