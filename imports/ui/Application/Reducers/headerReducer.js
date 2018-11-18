
import {TOGGLE_DRAWER} from '../Actions/headerActions';


export const headerInitialState = {
    currentTitle: "Rahe Application",
    drawerOpen: false,
  };


export default function headerReducer(state=headerInitialState,action){
    switch(action.type) {
        case 'TOGGLE_DRAWER':
            return action.payload; 
        case 'CHANGE_TITLE':
            return action.payload.currentTitle; 
        default:
            return state;
  
    }
  
  }


 