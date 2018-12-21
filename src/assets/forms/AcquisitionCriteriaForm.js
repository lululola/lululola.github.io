import React from 'react'
import Input from './Input'
import Button from '../Button'

const AcquisitionCriteriaForm = (props) => (
    <form id="acquisition" onSubmit={props.handleSubmit}>
        <Input
            id={"neighbourhood"}
            title={"Neighbourhood"}
            type={"text"}
            defaultValue={""}
            onChange={props.handleChange}
            required={true}
        />
        <Input
            id={"prop_type"}
            title={"Property type"}
            type={"text"}
            defaultValue={""}
            onChange={props.handleChange}
            required={true}
        />
        <Input
            id={"cap_rate"}
            title={"Minimal cap rate"}
            type={"number"}
            defaultValue={""}
            onChange={props.handleChange}
            required={true}
        />
        <label htmlFor="min">Deal volume</label>
        <div className="form-line" id="deal-volume">
            <Input 
                id={"min"}
                type={"number"}
                onChange={props.handleChange}
                required={true}
                placeholder={"Min"}
            />
            <Input 
                id={"max"}
                type={"number"}
                onChange={props.handleChange}
                required={true}
                placeholder={"Max"}
            />
        </div>
        <Button 
            className={"bg-yellow center-self"}
            type={"submit"}
            title={"Send"}
        />
    </form>
);

export default AcquisitionCriteriaForm