import React, { Component } from 'react';

import { Meteor, Account} from 'meteor/meteor'
import {connect} from 'react-redux';

import Button from '@material-ui/core/Button';
import {TextField} from '@material-ui/core';
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
            error: '',
            errorUserName :'',
            errorEmail: '',
            errorPassword: ''
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
        //const eTargetValue = e.target.value;
       // const eTargetName = this.state.tag ;


         // console.log("Data event target: " , eTar.find("#username").val());

     //    console.log("Data change Event: ", e.target.value);

       //  console.log("Data change Passed name",tag);
       this.setState({
         userData:{
           ...this.state.userData,
           [tag] : e.target.value
         }
       })

      // console.log("State data change: ",this.state.userData);

       const {userData} = this.state

        //  console.log("After check data: ",userData);

          this.props.onGetCurrentUser(userData);
         
      }

   

      onDataIn(e,tag){

        const tempUserData = {
          username: '',
          email: '',
          password: '',
          error : null,
        };
        
 
         
          switch(tag)
          {
              case 'username':
                tempUserData.username = e.target.value;
                break;

              case 'email':
                tempUserData.email = e.target.value;
                break;

              case 'password':
                tempUserData.password = e.target.value;
                break;

              case 'error':
                tempUserData.error = e.target.value;
                break;  

              default: 
                break;

          }

         const {userData} = this.state

         // console.log("After check data: ",userData);

          this.props.onGetCurrentUser(userData);
          
       }

   

      isValid() {
        const { username, password } = this.state.userData;
        let valid = false;
    
        if (username.length > 0 && password.length > 0) {
          valid = true;
        }
    
        if (username.length === 0) {
          this.setState({ errorUserName: 'Client error: You must enter an email address' });
        } else if (password.length === 0) {
          this.setState({ errorPassword: 'Client error: You must enter a password' });
        }
    
        return valid;
      }
    
      onSignIn() {
        const { username, password } = this.state.userData;

     //   console.log("user  is signing In....: ");
    
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

      //  console.log("user  is signed In....: ");
      //  console.log("user input now: ", Meteor.user());
       // console.log("user ID now: ", Meteor.userId());

      //  console.log("Username:", username);
      //  console.log("Password:", password);
        
       // this.props.getCurrentUser(this.state.userData);

     //   console.log("userData sent to redux:", this.state);

     //   console.log("Props sent to redux:", this.props);

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
                    error
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
                    helperText="username must be at least 5 letters"
                  />

                  or 
                  <TextField
                    autoFocus
                    margin="dense"
                    id="Email"
                    label="Email Address"
                    type="email"
                    onChange=
                    {e=> { this.onDataChange(e,'email')
                    //console.log("Input dtata ", e.target.email.value);
                  // this.setState({username: e.target.value})
                  }}
                    fullWidth
                    onBlur =   {e=> { this.onDataIn(e,'email')
                    //console.log("Input dtata ", e.target.email.value);
                  // this.setState({username: e.target.value})
                  }}
                  />

                  <TextField
                    autoFocus
                    margin="dense"
                    id="passWord"
                    label="Password"
                    type="password"
                    onChange=
                    {e=> { this.onDataChange(e,'password')
                    //console.log("Input dtata ", e.target.email.value);
                  // this.setState({username: e.target.value})
                  }}
                    fullWidth
                    onBlur =   {e=> { this.onDataIn(e,'password')
                    //console.log("Input dtata ", e.target.email.value);
                  // this.setState({username: e.target.value})
                  }}
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

//const {userData} = this.state;

const mapStateToProps = state => ({
  currentUser: state.user

});

const mapActionsToProps = {

  onGetCurrentUser : getCurrentUser
}

export default connect(mapStateToProps,mapActionsToProps) (SignIn);


//export default SignIn ;