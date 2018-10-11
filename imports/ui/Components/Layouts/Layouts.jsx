import  React, {Component,Fragment}  from "react";

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Body from "./Body/Body";



export default class Layout extends Component {
  constructor(props) {
      super(props);
      this.state = {

            title: "Welcome to the title",
      }

  }



  render(){

    const title = "Welcome! this is ourr title";

    return (

      <Fragment>
      
              <Header  title = {title} />
              
              <Body/>

              <Footer  />
      </Fragment>    
    );
  }

} 