
import  React  from "react";
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';



const logInDrawer = (
    <div >
      <List width='auto'>
   
              <Link to="/" >
                <ListItem button >
                  <ListItemIcon>
                      <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                  </ListItem>
               </Link> 
       

          <Divider />

        
            
             <Link to="/accounts" > 
             <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Accounts" />
        </ListItem>
             
             </Link> 
          

          <Divider />

      
           
             <Link to="/tasks" > 
             <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Tasks List" />
        </ListItem>
             
             </Link> 
        

          <Divider />

       
          
            <Link to="/test" > 
            <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Test Page" />
        </ListItem>
            
            </Link> 
        

          <Divider />
          
    
      </List>
      
      
    </div>
  );



  
  export default logInDrawer;
