
import {TOGGLE_DRAWER} from '../Actions/headerActions';

export const headerInitialState = {
    title: "Rahe Application",
    toggleDrawer: false,
    drawerData:{
        title:"Menu",
        tab:[ 
                {
                    key:0,
                    title:"Home",
                    isClicked:false,
                    numberOfClicks: 0,  
                },
                {
                    key:1,
                    title:"Account Settings",
                    isClicked:false,
                    numberOfClicks: 0,     
                },
                {
                    key:2,
                    title:"List of Tasks",
                    isClicked:false,
                    numberOfClicks: 0,    
                },
                {
                    key:3,
                    title:"New Task",
                    isClicked:false,
                    numberOfClicks: 0,   
                },
            ]
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


 