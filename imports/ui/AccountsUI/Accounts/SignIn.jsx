import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class SignIn extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          email: '',
          password: '',
          open: false,
        };
      };

      handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

      onDataChange(e){
          console.log(e.target.value);
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
         
          <TextField
              autoFocus
              margin="dense"
              id="Email"
              label="Email Address"
              type="email"
              onChange={this.onDataChange}
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="passWord"
              label="Password"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


export default SignIn;