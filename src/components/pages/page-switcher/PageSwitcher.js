import React, {Component} from 'react'

class PageSwitcher extends Component {

    render() {
        return(
            <div id="page-switcher-container">
                <ul id="page-switcher">
                    <li className="page-switcher-active"><a>01</a></li>
                    <li><a href="">02</a></li>
                    <li><a href="">03</a></li>
                    <li><a href="">04</a></li>
                    <li><a href="">05</a></li>
                    <li><a href="">06</a></li>
                    <li><a href="">07</a></li>
                </ul>
            </div>
        )
    }
}

export default PageSwitcher;