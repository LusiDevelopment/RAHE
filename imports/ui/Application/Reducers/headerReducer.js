
import {TOGGLE_DRAWER} from '../Actions/headerActions';

export const headerInitialState = {
    title: "Rahe Application",
    toggleDrawer: false,
    drawerData:{
        title:"Menu",
        homeTab:{
            title:"Home",
            isClicked:false,
            numberOfClicks: 0,  
        },
        accountTab:{
            title:"Account Settings",
            isClicked:false,
            numberOfClicks: 0,     
        },
        listTab:{
            title:"List of Tasks",
            isClicked:false,
            numberOfClicks: 0,    
        },
        newTaskTab:{
            title:"New Task",
            isClicked:false,
            numberOfClicks: 0,   
        },
    }
  };


export default function headerReducer(state=headerInitialState,action){
    switch(action.type) {
        case 'TOGGLE_DRAWER':
       
            return Object.assign({}, state, { 
                toggleDrawer:action.payload.toggleDrawer 
               
                });
            
              
        case 'CHANGE_TITLE':
            return Object.assign({}, state, { 
                title:action.payload.title
           
                });
            
        default:
            return state;
  
    }
  
  }


 