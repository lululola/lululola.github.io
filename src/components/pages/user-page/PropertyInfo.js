import React, { Component } from 'react';

class PropertyInfo extends Component {
    render() {
        return (
            <div className="property-info-container">
                <h3><i className="fa fa-map-marker"></i>{this.props.property.address}</h3>
                <div className="corners propertypic-container">
                    <span><img src={this.props.property.img} alt=""/></span>
                </div>
                <h3><i className="fa fa-user"></i>{this.props.property.description}</h3>
                <span className="large">70</span><span className="big">$ {this.props.property.price}</span>
            </div>
        );
    }
}

export default PropertyInfo;