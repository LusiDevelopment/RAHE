import  React, {Component}  from "react";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
          <Typography gutterBottom variant="h2" component="h2">
                        RAHE Application
          </Typography>

          <Typography component="p">
                       Show times Date (Today)
          </Typography>

          <Card >
              <CardActionArea>
                  <CardMedia
                   
                    image="HannaK.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Advertisement comes Here
                      </Typography>
                      <Typography component="p">
                       This Application is used to manage tasks and daily activities.
                       <br />
                       You can use it on your telephone or computer.
                      </Typography>
                  </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="big" color="primary">
                  LogIn
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
        
        </div>
           
    );
  }

} 