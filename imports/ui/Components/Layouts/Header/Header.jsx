import  React, {Component}  from "react";

import Navigation from "./Navigation/Nagivation";

export default class Header extends Component {


  render(){
      

    return (
               
                          <Navigation title = {this.props.title} />
              
        );
  }

} 