import  React, {Component}  from "react";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper, Grid } from "@material-ui/core";

import TimeContainer from '../../../../Time/GetTime';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

export default class Home extends Component {



  render(){

    return (
        <div> 
          <Grid  
           container
           spacing={8}
           direction="column"
           alignItems="center"
           justify="center"
            >
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <Typography gutterBottom variant="display1" >
                          Todo List
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} xl={12}>
          <Typography variant="headline"   >
                       Show times Date (Today)
          </Typography>

              <TimeContainer />

          </Grid>
          <Grid item xs={12} sm={12} md={12} xl={12}>
          <Card raised={true} >
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
            </Grid>
          </Grid>
        </div>
           
    );
  }

} 