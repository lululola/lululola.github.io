import React, { Component } from "react";
import {Link} from "react-router-dom";
import Logo from '../../../../assets/Logo'
class Header extends Component {
    render() {
        return(

                        <header>
                            <Logo />
                            <nav>
                                
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/">About</Link></li>
                                    <li><Link to="/">News</Link></li>
                                    <li><Link to="/">Contact</Link></li>
                                </ul>
                                
                            </nav>
                            <div id="search-field">
                                <form id="search">
                                    <input type="search"/>
                                </form>
                            </div>
                        </header>
        );
    }
}
  
export default Header; 