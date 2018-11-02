import  React, {Component}  from "react";

import Navigation from "./Navigation/Nagivation";

export default class Header extends Component {


  render(){
      

    return (
              <header>
               
                       <Navigation title = {this.props.title} Open={this.props.Open} toggleDrawer={this.props.toggleDrawer} />
              </header>
        );
  }

} 