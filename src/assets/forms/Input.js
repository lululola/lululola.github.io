import React from 'react';

const Input = (props) => (  
    <React.Fragment>
        {(props.title) ? <label htmlFor={props.id}>{props.title}</label> : null}
        <input
        name={props.id}
        id={props.id}
        type={props.inputType}
        defaultValue={props.content}
        onChange={props.controlFunc} 
        required={props.required}
        placeholder={props.placeholder}/>
    </React.Fragment>
);


export default Input;  