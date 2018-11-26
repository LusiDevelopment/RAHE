import React, { Component } from 'react';

import { Meteor, Account} from 'meteor/meteor'
import {connect} from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Chip from '@material-ui/core/Chip';

import {getCurrentUser} from '../../Application/Actions/userActions';


class SignIn extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          userData: {
            username: '',
            email: '',
            password: '',
            error : null,
          },
          signInDialogOpen: false,
        };

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.onDataChange = this.onDataChange.bind(this);

        this.onSignIn = this.onSignIn.bind(this);
        
      };

      handleClickOpen = () => {
        this.setState({ signInDialogOpen: true });
      };
    
      handleClose = () => {
        this.setState({ signInDialogOpen: false });

       // console.log(this.state.userData.email);
      
      };

      onDataChange(e,tag){
       // const eTar= $(e.target);

         // console.log("Data event target: " , eTar.find("#username").val());

         console.log("Data change Event: ", e.target.value);

         console.log("Data change Passed name",tag);
         
      }

      onDataIn(e,tag){
        // const eTar= $(e.target);
 
          // console.log("Data event target: " , eTar.find("#username").val());
 
          console.log("Data In Event: ", e.target.value);
 
          console.log("Data In Passed name",tag);
          
       }

      isValid() {
        const { username, password } = this.state.userData;
        let valid = false;
    
        if (username.length > 0 && password.length > 0) {
          valid = true;
        }
    
        if (username.length === 0) {
          this.setState({ error: 'Client error: You must enter an email address' });
        } else if (password.length === 0) {
          this.setState({ error: 'Client error: You must enter a password' });
        }
    
        return valid;
      }
    
      onSignIn() {
        const { username, password } = this.state.userData;

        console.log("user  is signing In....: ");
    
      //  console.log("user input now: ", Meteor.user());

        if (this.isValid()) {
          // do stuff
          Meteor.loginWithPassword( username, password , (error) => {
        
            if (error) {
              this.setState({ error: error.reason });
              console.log("ERROR ON USER SING IN:",error);
            }

            console.log("user sign in now: ", Meteor.user());
          });

        }

        console.log("user  is signed In....: ");
        console.log("user input now: ", Meteor.user());
        console.log("user ID now: ", Meteor.userId());

        console.log("Username:", username);
        console.log("Password:", password);
        
       // this.props.getCurrentUser(this.state.userData);

        this.setState({ signInDialogOpen: false });

      }
    
    
      
  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}> SingIn </Button>
        <Dialog
          open={this.state.signInDialogOpen}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title"> LogIn Form </DialogTitle>
            <DialogContent>

             
             {
               this.state.userData.error ? 
               <Chip label={this.state.userData.error}  /> : <div />
            }

            <TextField
                autoFocus
                margin="dense"
                id="username"
                label="username"
                type="username"
                onChange=
                {e=> { this.onDataChange(e,'username')
                  //console.log("Input dtata ", e.target.email.value);
                 // this.setState({username: e.target.value})
                }}
                onBlur =   {e=> { this.onDataIn(e,'username')
                //console.log("Input dtata ", e.target.email.value);
               // this.setState({username: e.target.value})
              }}
                fullWidth
              />

              or 
              <TextField
                autoFocus
                margin="dense"
                id="Email"
                label="Email Address"
                type="email"
                onChange=
                {e=> {
                  //console.log("Input dtata ", e.target.email.value);
                 // this.setState({email: e.target.value})
                }}
                fullWidth
              />

              <TextField
                autoFocus
                margin="dense"
                id="passWord"
                label="Password"
                type="password"
                onChange=
                {e=> {
                 // this.setState({password: e.target.value})
                }}
                fullWidth
              />
            </DialogContent>
          <DialogActions>
            <Button onClick={this.onSignIn} color="primary">
              Sign In
            </Button>
            <Button onClick={this.onCreateAccount} color="primary">
              Create Account
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

/*
const mapStateToProps = state => ({
  currentUser: this.state.userData 
});

const mapActionsToProps = {

  onSignIn : getCurrentUser
}

export default connect(mapStateToProps,mapActionsToProps) (SignIn);
*/

export default SignIn ;