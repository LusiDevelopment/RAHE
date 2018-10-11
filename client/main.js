import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import { Mongo } from 'meteor/mongo';


import '../imports/both/App.jsx'; 
import './main.html';

import Layout from '../imports/ui/Components/Layouts/Layouts'

  Meteor.startup(() => {

    const App = document.getElementById('App');


    render( 
        <Router>

           <Layout/>
        
        </Router>,

        App);
  
  });



 
