import React from 'react'
import Input from './Input'
import Button from '../Button'

const LoginForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <Input 
            id={"email"}
            title={"Email"}
            type={"text"}
            defaultValue={""}
            onChange={props.handleChange}
            required={true}
        />
        <Input 
            id={"cellphone"}
            title={"Cell phone"}
            type={"number"}
            defaultValue={""}
            onChange={props.handleChange}
            required={true}
        />
        <Button 
            className={"bg-yellow center-self"}
            type={"submit"}
            title={"Submit"}
        />
    </form>
);

export default LoginForm