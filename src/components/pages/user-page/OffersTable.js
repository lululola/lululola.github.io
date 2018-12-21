import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Offer from './offer/Offer'

class OffersTable extends Component {
    constructor(props) {
        super(props);
        this.openAcceptForm = this.openAcceptForm.bind(this);
        this.openCounterForm = this.openCounterForm.bind(this);
    }

    openAcceptForm(prop) {
        let props = {
            property: prop,
            counterForm: false
        }
        ReactDOM.render(<Offer {...props}/>, document.getElementById("root"));
    }

    openCounterForm(prop) {
        let props = {
            property: prop,
            counterForm: true
        }
        ReactDOM.render(<Offer {...props}/>, document.getElementById("root"));
    }

    render() {

        const propertyItems = this.props.properties.map(function(prop, i) {

            return (
            <tr key={i}>
                <td>
                    <div className="buyer-info">
                        <h3 className="buyer-name">{prop.owner.name}</h3>
                        <ul>
                            <li>{prop.owner.owned} properties owned</li>
                            <li>{prop.owner.sold} property sold in last 12 months</li>
                            <li>{prop.owner.bought} properties bought in last 12 months</li>
                        </ul>
                    </div>
                </td>
                <td>${prop.price}</td>
                <td>${prop.deposit}</td>
                <td>{prop.diligence} days</td>
                <td>{prop.closing} days</td>
                <td>{prop.conditions ? "yes" : "no"}</td>
                <td>
                    <div className="accept-counter">
                        <button className="accept" onClick={() => this.openAcceptForm(prop)}>Accept</button>
                        <button className="counter" onClick={() => this.openCounterForm(prop)}>Counter</button>
                    </div>
                </td>
            </tr>
            );
        }, this);

        return(
            <table className="offers-list">
                <thead>
                    <tr>
                        <td>Property</td>
                        <td>Price</td>
                        <td>Deposit</td>
                        <td>Diligence</td>
                        <td>Closing</td>
                        <td>Conditions</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {propertyItems}  
                </tbody>
            </table>
        );
    }
}

export default OffersTable;