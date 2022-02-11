import React from "react";

const MySelf = props => {
    return (
        <div className="profile">
            <p>hello</p>
            <h2>I am {props.name}</h2>
            <p>I am {props.age} years old</p>
            <p>I am from {props.country}</p>
        </div>
    );
}



export default MySelf;