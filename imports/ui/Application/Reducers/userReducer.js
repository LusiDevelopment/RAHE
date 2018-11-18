

export const userInitialState = {
      user: 'Annick'
    };

export default function userReducer(state=userInitialState,action){
    switch(action.type) {
      case 'UPDATE_USER':
            return action.payload.user; 
      default:
            return state;
  
    }
  
  }

 