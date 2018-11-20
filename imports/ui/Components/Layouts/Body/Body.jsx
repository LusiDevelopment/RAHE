import  React, {Component}  from "react";
import {Route, Switch} from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Home from "./Pages/Home/Home";
import Accounts from "./Pages/Accounts/Acounts";
import Error404 from "./Pages/Error404/Error404";
import TasksList from "./Pages/Tasks/Tasks.jsx";
import Test from "./Pages/Test/Test";


export default  class Body extends Component {

    render(){

        return (
            <main>
        
                <Switch>
                
                    <Route 
                            exact path="/" 
                            component={Home}
                    
                            />
                
                    <Route 
                            path="/accounts" 
                            component={Accounts} 
                            />

                    <Route
                            path='/tasks'
                            render={(props) => <TasksList {...props}  />}
                            />



                    <Route 
                            path="/test" 
                            component={Test} 
                            />
                    

                    <Route 
                            component={Error404}
                            />

                </Switch> 
                
            </main>
                
    
        );
    }

} 