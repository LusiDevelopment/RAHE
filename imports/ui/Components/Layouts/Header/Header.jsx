import  React, {Component}  from "react";

import {connect} from 'react-redux';

import Navigation from "./Navigation/Nagivation";

import { toggleDrawer } from '../../../Application/Actions/headerActions';

class Header extends Component {

  constructor(props){
      super(props);

      this.onToggleDrawer = this.onToggleDrawer.bind(this);

  }

  onToggleDrawer(e){
    
      e.preventDefault();

      this.props.onToggleDrawer(this.props.header.drawerOpen);
      console.log("On Toggle Drawer",this.props.header);
  } 
 
  render(){
      
  //  console.log("Header New Props:",this.props);


    return (
              <header>
               
                       <Navigation title = {this.props.title} Open={this.props.Open} toggleDrawer={this.props.toggleDrawer} />
                      <button onClick={this.onToggleDrawer}> Test Toggle </button>
              </header>
        );
  } 

} 

const mapStateToProps = state => ({
    header: state.header,
});

const mapActionsToProps = {
  onToggleDrawer: toggleDrawer
}

export default connect(mapStateToProps,mapActionsToProps) (Header);