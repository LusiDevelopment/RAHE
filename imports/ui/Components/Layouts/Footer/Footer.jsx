import  React, {Component}  from "react";
import NavigationF from "./Navigation/NavigationF";

import {categories} from '../../../../api/Collections/Categories';


export default class Footer extends Component {



  render(){

    return (
         
                <footer>
                      
                        <NavigationF  />
                </footer>

      
           
    );
  }

} 