import React from 'react';
import './Add.css'
import { Link } from 'react-router-dom';

const Add = props => {
    return (
       
        
        <Link to = {props.link} >
            <button className = "Add__Customer">Insert</button>
        </Link> 
    );
}

export default Add;
