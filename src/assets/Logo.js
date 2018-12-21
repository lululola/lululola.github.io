import React from 'react'
import {Link } from 'react-router-dom'
import logo from '../img/logo.png'

function Logo() {
    return(
        <Link to="/" onClick={()=>this.props.history.push('/')} className="center-self"><img id="logo" src={logo} alt="logo"/></Link>
    )
}
export default Logo;