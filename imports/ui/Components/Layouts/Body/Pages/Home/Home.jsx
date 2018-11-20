/* 
 *  Author: Annick K
 *  Created on: 2018-10-26
 *  Component: Home
 * 
 *  Description: Home Screen of the App
 * 
 *  Changes and updates: 
 * 
*/

import  React, {Component, Fragment}  from "react";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {CardHeader} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper, Grid } from "@material-ui/core";

import { withStyles } from '@material-ui/core/styles';

import TimeContainer from '../../../../Time/GetTime';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width:'100%',
  },
  grow: {
    flexGrow: 1,
    align:'center',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
 
 
});


class Home extends Component {
  
 

  render(){

    const { classes, theme } = this.props;

    return (
      
          <Card raised={true} className={classes.root} >
                <CardHeader
                       
                        title="Todo List"
                        subheader={ <TimeContainer /> }
              />
              <CardActionArea>
                  <CardMedia
                    style = {{ height: 140, paddingTop: '50%'}}                   
                    image="./HannaK.jpg"
                    title="Hanna Kituka"
                    width='100%'
                    
                  />
                  <CardContent>
                      <Typography gutterBottom variant="headline" >
                        Advertisement comes Here
                      </Typography>
                      <Typography variant="body1" >
                       This Application is used to manage tasks and daily activities.
                       <br />
                       You can use it on your telephone or computer.
                      </Typography>
                  </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="large" color="primary">
                  LogIn
                </Button>
                <Button size="large" color="primary">
                  Learn More
                </Button>
              </CardActions>
            
            </Card> 
           
    );
  }

} 

export default withStyles(styles, { withTheme: true })(Home);