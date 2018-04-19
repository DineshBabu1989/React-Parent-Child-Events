import React, { Component } from 'react';
import TestChild from './TestChild';

class TestParent extends Component {

constructor(props){
    super(props);
    this.state = {
        data: [ 'info from parent state in child'],
        click: false
    }    
}

handleClick = (event) => {
    console.log("you have clicked child");
    this.setState({click:true});
}    
    
render(){
 return(
     <div>
     <TestChild item ={this.state.data[0]} onClick ={this.handleClick} />
     </div>
 );
}


}

export default TestParent;