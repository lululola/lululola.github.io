import React, { Component } from 'react';


function SubmitBtn() {
    return(
        <button className="submit-btn bg-yellow center-self">Submit offer</button>
    )
}

function AcceptCounterBtn() {
    return(
        <div>
        <button className="submit-btn bg-yellow center-self">Accept counter offer</button><br/><br/>
        </div>
    )
}

function SubmitNewCounter() {
    return(
        <div>
        <button className="submit-btn bg-yellow center-self">Submit new counter</button><br/><br/>
        <h6 className="half center">Accepting this Offer, your Attorney will be <br/>notified to prepare a contract</h6>
        </div>
    )
}

function BackBtn() {
    return(
        <a href="" className="back" >
            <i className="fa fa-chevron-left"></i>Back to deal process
        </a>
    )
}
class Offer extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ""}
    }

    render() {
        return (
            <section className="section offer" id="offer">
            <BackBtn />
                <div className={"form-container half center-xy offer " + ( this.props.counterForm ? "counter-offer" : undefined)}>
                    <form className="center-xy">
                        <table className="offer-data  center">
                        <tbody>
                            <tr>
                                <td>Property address:</td>
                                <td><input type="text" defaultValue={this.props.property.address} readOnly required/></td>
                            </tr>
                            <tr>
                                <td>Price:</td>
                                <td><input type="text" className={this.props.counterForm ? "changed" : undefined} defaultValue={("$" + this.props.property.price)} required/></td>
                            </tr>
                            <tr>
                                <td>Deposit:</td>
                                <td>
                                    <input type="text" defaultValue={("$" +  this.props.property.deposit)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td>Closing:</td>
                                <td><input type="text" defaultValue={ this.props.property.closing} required/></td>
                            </tr>
                            <tr>
                                <td>Financing:</td>
                                <td><input type="text" defaultValue={ this.props.property.financing} required/></td>
                            </tr>
                            <tr>
                                <td>Special Conditions:</td>
                                <td><input type="text" defaultValue={ this.props.property.conditions ? "yes" : "no"} required/></td>
                            </tr>
                            <tr>
                                <td>Attorney info:</td>
                                <td><input type="text" defaultValue={ this.props.property.attorney} readOnly required/></td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="center-self">
                                    {this.props.counterForm 
                                        ? <React.Fragment>
                                            <AcceptCounterBtn />
                                            <SubmitNewCounter/> 
                                        </React.Fragment>
                                        : <SubmitBtn />}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </section>
        );
    }
}

export default Offer;