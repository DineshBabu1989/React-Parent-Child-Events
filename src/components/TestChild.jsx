import React from 'react';
import PropTypes from 'prop-types';


const TestChild = ({onClick,item}) => {

return(
<div > 
    <h1>{item}</h1>
    <h1 onClick = {onClick} >child element- click here and see the console
    </h1>
</div>
);

}

TestChild.propTypes = {
    item : PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default TestChild;