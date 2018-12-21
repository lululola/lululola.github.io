import React, { Component } from "react";
import {BrowserRouter as Router,Link } from 'react-router-dom'

import {FooterContext} from '../../../assets/FooterContext'

class Main extends Component {
    static contextType = FooterContext;
    
    componentDidMount() {
        this.context.toggleFooter();
    }
    componentWillUnmount() {
        this.context.toggleFooter();
    }
    render() {
        return (
            <section className="section main">
                <div className="container">
                    <div className="main-titles-container">
                        <div className="main-titles">
                            <div className="yellow-square"></div>
                            <h1 className="bold">First virtual real estate broker</h1>
                            <p>
                                Sellers are connected & transact directly with the most likely buyers 
                                via carefully crafted artificial intelligence algorithms
                            </p>
                            <div className="button-container">
                            

                                <React.Fragment>
                                <Link to='/acquisition-criteria' className="btn select bg-yellow">Buyer</Link>
                                <Link to='/property' className="btn select bg-yellow">Seller</Link>
                                </React.Fragment>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Main;