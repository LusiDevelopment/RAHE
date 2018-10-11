import  React, {Component}  from "react";


export default class Title extends Component {



  render(){

    return (
        <div> 
                <header>
                        <h3> {this.props.title}</h3>  
                </header>
        
        </div>
          
    );
  }

} 