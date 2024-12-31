import React ,{Component} from "react";


class Greeting extends Component{
    constructor(props){
        super(props)
        this.state = {name : "naveen"}
    }


    Change = ()=>{
              this.setState({name : " Naveen reddy"})
    }


  render(){
    return(
        <button onClick={this.Change}>{this.state.name}</button>  
    ) 
  }
}

export default Greeting;