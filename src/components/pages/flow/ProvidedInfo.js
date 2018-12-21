import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class ProvidedInfo extends Component {
    
    render() {
        return(
            <section className="section property-worth" data-anchor="property-worth" id="property-worth">
                <div className="split-container">
                    <div className="split left">
                        <div className="container full-width">
                            <div className="main-titles-container">
                                <div className="main-titles">
                                    <div className="yellow-square"></div>
                                    <h1 className="bold">Based on<br/> provided info</h1><br/><br/>
                                    <p className="half">
                                        your property is worth in the <span className="bold">${this.props.min} - {this.props.max}M range</span><br/>
                                        Collider has identified {this.props.buyers} most likely buyers
                                    </p>
                                    <div className="button-container">
                                <a href="" className="button yellow">Comparables</a>
                                <Link to="/asking-price" className="button yellow">Sell with us?</Link>
                            </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="split right">
                        <div className="button-container bottom-center">
                            <a href="" className="button yellow">Comparables</a>
                            <Link to="/asking-price" className="button yellow">Sell with us?</Link>
                        </div>   
                    </div>   
                </div>
            </section>
        )
    }
}

export default ProvidedInfo;