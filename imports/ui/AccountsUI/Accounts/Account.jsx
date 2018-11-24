// RNPasswordExample/Account.js

import React, { Component } from 'react';

import SignIn from './SignIn';
import SignOut from './SignOut';

class Account extends Component {
  constructor(props) {
    super(props);
    this.data = {};
  }

  getMeteorData() {
    return {
      user: Meteor.user(),
    };
  }

  render() {
    console.log("user in now: ",this.getMeteorData());
    if (this.data.user) {
      return <SignOut />
    }

    return <SignIn />;
  }
}

export default Account;