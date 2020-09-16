import React,{useState} from 'react';
import './Person.css';


const person = (props) =>{
    const element = <h1>this is a person function from person component</h1>;
    const propsElement = <p>my name is {props.name} and my age is {props.age}</p>
    return (
        <div className="Person">
            {element}
            {propsElement}
        </div>
    );
}

export default person;