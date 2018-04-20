import React from 'react';
import PropTypes from 'prop-types';


const TestChild = ({onClick,item}) => {

const Array = item;
const items = Array.map((item,i) =>{
              return <li key={i} 
              onClick = {()=>onClick(i)}>{item}</li>});
    
return(
<div > 
    <h1>{items}</h1>
</div>
);

}

TestChild.propTypes = {
    item : PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
}

export default TestChild;