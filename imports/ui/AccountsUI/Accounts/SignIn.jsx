import React, { Component } from 'react';

import { Meteor, Account} from 'meteor/meteor'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Chip from '@material-ui/core/Chip';

class SignIn extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          email: '',
          password: '',
          error: null,
          open: false,
        };

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.onDataChange = this.onDataChange.bind(this);

        this.onSignIn = this.onSignIn.bind(this);
        this.onCreateAccount = this.onCreateAccount.bind(this);

      };

      handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        console.log(this.state.email);
      
      };

      onDataChange(e){
          console.log(e.target);
         
      }

      isValid() {
        const { email, password } = this.state;
        let valid = false;
    
        if (email.length > 0 && password.length > 0) {
          valid = true;
        }
    
        if (email.length === 0) {
          this.setState({ error: 'You must enter an email address' });
        } else if (password.length === 0) {
          this.setState({ error: 'You must enter a password' });
        }
    
        return valid;
      }
    
      onSignIn() {
        const { email, password } = this.state;
    
        if (this.isValid()) {
          // do stuff
          Meteor.loginWithPassword(email, password, (error) => {
            if (error) {
              this.setState({ error: error.reason });
              console.log("ERROR ON USER SING IN:",error);
            }

            console.log("user sign in now: ", Meteor.user());
          });

        }

        this.setState({ open: false });
      }
    
      onCreateAccount() {
        const { email, password } = this.state;
    
        if (this.isValid()) {
          // do stuff
          Accounts.createUser({ email, password }, (error) => {
            if (error) {
              this.setState({ error: error.reason });
              console.log("ERROR ON USER CREATION:",error);
            } else {
              this.onSignIn(); // temp hack that you might need to use
            }
          });

        }

        this.setState({ open: false });
      }
      
    
      
  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}> SingIn </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>

          <Chip label={this.state.error}  />

          <TextField
              autoFocus
              margin="dense"
              id="Email"
              label="Email Address"
              type="email"
              onChange=
              {e=> {
                this.setState({email: e.target.value})
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
                this.setState({password: e.target.value})
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


export default SignIn;