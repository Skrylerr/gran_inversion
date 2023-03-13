import React from "react";

const PersonCard = props => {
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair: {props.hairColor}</p>
        </div>
    )
}

export default PersonCard;