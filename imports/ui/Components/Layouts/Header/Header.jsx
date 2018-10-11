import  React, {Component}  from "react";

import Title from './Title/Title';
import Navigation from "./Navigation/Nagivation";

export default class Header extends Component {


  render(){
      

    return (
        <div> 
                <header>
                            <h1> This is the Header</h1>
                            <Navigation></Navigation>
                    <div>
                            <Title title = {this.props.title} />
                           
                    </div>
                     
                </header>
        
        </div>
          
    );
  }

} 