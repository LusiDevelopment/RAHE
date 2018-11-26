export const CURRENT_USER = 'CURRENT_USER' ;

export function getCurrentUser(currentUser){
       
   return { 
            type:   'CURRENT_USER',
            payload: {
                userData: currentUser,
                    
                }
                
        }
}


