export const TOGGLE_DRAWER = 'drawerOpenC:toggleDrawer';

export function toggleDrawer(toggleDrawer){
       
   return { 
            type:   'TOGGLE_DRAWER',
            payload: {
                    toggleDrawer: !toggleDrawer,
                    
                }
                
        }
}


