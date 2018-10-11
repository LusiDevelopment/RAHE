import  React, {Component}  from "react";
import TabNavB from "./Navigation/TabNavB";

import {categories} from '../../../../api/Collections/Categories';


export default class Footer extends Component {



  render(){

    return (
        <div> 
                <footer>
                        <h1> Footer comes Here !</h1>  
                        <TabNavB categories={categories} />
                </footer>

        </div>
           
    );
  }

} 