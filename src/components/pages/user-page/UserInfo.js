import React, { Component } from 'react';

class UserInfo extends Component {

    constructor(props) {
        super();
    }
    render() {
        if(this.props.length === 0) {
        return null;
    }
        else {
        return (
            <div className="user-info-container">
                <div className="corners userpic-container">
                    <span><img src={this.props.user.img} alt=""/></span>
                </div>
                <div className="user-info">
                <h3 className="uppercase">{this.props.user.name}</h3><br/>
                <h3><i className="fa fa-building"></i>{this.props.user.company}</h3>
                <ul>
                    <li>{this.props.user.tours} <span className="uppercase">Tours</span></li>
                    <li>{this.props.user.flyers} <span className="uppercase">Flyers</span></li>
                    <li>{this.props.user.accepted} Offer <span className="uppercase">Accepted</span></li>
                </ul>
                </div>
            </div>
        );
        }
    }
}

export default UserInfo;