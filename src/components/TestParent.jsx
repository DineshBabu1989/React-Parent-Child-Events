import React, { Component } from 'react';
import TestChild from './TestChild';

class TestParent extends Component {

constructor(props){
    super(props);
    this.state = {
        data: [ 'item1','item2','item3'],
        click: false
    }    
}

handleClick = (i) => {
    console.log("you have clicked child-"+i);
    this.setState({click:true});
}    
    
render(){
 return(
     <div>
     <TestChild item ={this.state.data} onClick ={this.handleClick} />
     </div>
 );
}


}

export default TestParent;