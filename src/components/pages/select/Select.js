import React, {Component} from 'react'
import {BrowserRouter as Link } from 'react-router-dom'

class Select extends Component {
    render() {
        return(
            <section className="section buyer-seller" data-anchor="buyer-seller" id="buyer-seller">
                <div className="container center center-xy center-self">
                        <h1 className="title">Are you a</h1>
                        <div className="button-container center-self">
                            <Link to='/acquisition-criteria' className="btn select bg-yellow" id="buyer">Buyer</Link>
                            <Link to='/property' className="btn select bg-yellow" id="seller">Seller</Link>
                        </div>
                </div>
            </section>
        )
    }
}

export default Select;