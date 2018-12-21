import React, { Component } from 'react';
import Ticker from './Ticker'
import 'font-awesome/css/font-awesome.min.css'
import {FooterContext} from '../../../../assets/FooterContext'

const homeStyle = {
    paddingBottom: 1.2 + "vw"
}
class Footer extends Component {

    constructor(props) {
        super();
        this.state = {
            page: "page"
        }
    }
    render() {
        return(
                <React.Fragment>
                    <footer id="footer">
                        <div className="footer-content" style={homeStyle}>
                            <div className="social-icons">
                                <div className="icon"><a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></div> 
                                <div className="icon"><a href="https://twitter.com/"><i className="fa fa-twitter"></i></a></div> 
                                <div className="icon"><a href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a></div>
                                <div className="icon"><a href="https://plus.google.com/discover"><i className="fa fa-google-plus"></i></a></div>
                            </div>
                            <div id="arrow">
                                <i className="fa fa-angle-down"></i>
                            </div>
                        </div>
                        <FooterContext.Consumer>
                        {({page, toggleFooter}) => (
                            page === "home" 
                            ? ("", <Ticker />) 
                            : undefined
                        )}
                        </FooterContext.Consumer>
                    </footer>   
                </React.Fragment>
        );

    }
}

export default Footer;
