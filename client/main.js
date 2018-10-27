/* 
 *  Author: Annick K
 *  Created on: 2018-10-26
 *  Component: main client 
 * 
 *  Description: the client file that run on start-up
 * 
 *  Changes and updates: 
 * 
*/

import { Meteor } from 'meteor/meteor';

// Render is required to target and run the HTML element
import React from 'react';
import { render } from 'react-dom';

// Get the App component and html documents where the App will run, render
import '../imports/both/App.jsx'; 
import './main.html';

import App from '../imports/ui/Application/App.jsx';


Meteor.startup(() => {

    const TargetRender = document.getElementById('render-target');


    render(   <App />,  TargetRender );
  
  });



 
