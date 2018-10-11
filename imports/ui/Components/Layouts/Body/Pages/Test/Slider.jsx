import  React, {Component}  from "react";



export default class TSlider extends Component {



constructor(props){
    super(props);

    this.state ={

        index: props.Index,
        imgUrl:[
                    "../../../../../../img/AnnickK.jpg",
                    "../../../../../../img/RebeccaK.jpg",
                    "../../../../../../img/HannaK.jpg",
                    "../../../../../../img/ElisaK.jpg",
                    "../../../../../../img/AnnickK.jpg",
                    "../../../../../../img/RebeccaK.jpg",
                    
        ],
        altImg:[
                    "Annick K",
                    "Rebecca K",
                    "Hanna K",
                    "Elisa K",
                    "Annick K",
                    "Rebecca K"

        ],

       
    };

}



  render(){

  

    return (
         
               
                   <div>
                   
                            <img  src={this.state.imgUrl[this.state.index]} alt={this.state.altImg[this.state.index]} />

                   </div>
               
        
           
    );
  }

} 