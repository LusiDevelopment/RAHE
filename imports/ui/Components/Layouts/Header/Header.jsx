/* 
 *  Author: Annick K
 *  Created on: 2018-10-26
 *  Component: Header
 * 
 *  Description: Header of the App
 * 
 *  Changes and updates: 
 * 
*/

import  React, {Component}  from "react";

import {connect} from 'react-redux';
import Drawer from '@material-ui/core/Drawer';

import Navigation from "./Navigation/Nagivation";

import { toggleDrawer } from '../../../Application/Actions/headerActions';


import LeftPane from "./Navigation/LeftPane";

const initialState = {
    toggleOpen : false,
};


class Header extends Component {

  constructor(props){
      super(props);

      this.onToggleDrawer = this.onToggleDrawer.bind(this);

      this.onTabIsClicked = this.onTabIsClicked.bind(this);
  }

  onToggleDrawer(e){
    
      e.preventDefault();
      
      this.props.onToggleDrawer(initialState.toggleOpen);
     
     
  } 

  onTabIsClicked(e){
     // e.preventDefault();

        console.log(e);
       
  }
 
  render(){
      
  initialState.toggleOpen = this.props.header.toggleDrawer;

  //console.log(this.props.header.drawerData);
  
    return (
              <header>
                    <Drawer
                   
                         open={initialState.toggleOpen}
                         onClose={ this.onToggleDrawer}
                         onKeyDown={this.onToggleDrawer}
                                
                    >
                        <div 
                            tabIndex={0}
                            role="button"
                            onClick={this.onToggleDrawer}
                            onKeyDown={this.onToggleDrawer}
                        >
                                    
                                <LeftPane drawerData={this.props.header.drawerData} onTabIsClicked={this.onTabIsClicked} toggleDrawer={this.onToggleDrawer} />
                        </div>
                    </Drawer>
               
                    <Navigation  title = {this.props.header.title} toggleDrawer={this.onToggleDrawer}  />

                  
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