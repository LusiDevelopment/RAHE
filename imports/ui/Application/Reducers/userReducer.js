

export const userInitialState = {
      userData:{
            username: '',
            email: '',
            password: '',
            error : {
                  username:'',
                  email: '',
                  password: ''
                },
          }
    };

export default function userReducer(state=userInitialState,action){
    switch(action.type) {
     
      case 'CURRENT_USER':
            return Object.assign({}, state, { 
                  userData:action.payload.userData
           
                });
                  
      default:
            return state;
  
    }
  
  }

 