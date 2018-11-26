// RNPasswordExample/Account.js

import React, { Component } from 'react';
import {Meteor} from 'meteor/meteor';

import SignIn from './SignIn';
import SignOut from './SignOut';

class Account extends Component {
  constructor(props) {
    super(props);
    this.data = {};
  }

  getMeteorData() {
    console.log("getMeteorData is running", Meteor.user());
    return {
      currentUser: Meteor.user(),
    };
  }
             
  render() {
    console.log("user in now: ",this.getMeteorData());
    console.log("Account this user data in now: ",this.data.user);
  

    if (this.data.user) {
      return <SignOut />
    }

    return <SignIn />;
  }
}

export default Account;