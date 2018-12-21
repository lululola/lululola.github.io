import React, {Component} from 'react'

class LoginCheck extends Component {
    constructor(props) {
        super();
        this.state = {}
    }
    render() {
        return(
            <section className="section login-check" data-anchor="login-fail" id="login-fail">
            <div className="container center center-xy">
                <h1 className="title center-self bold uppercase">Thank you!</h1>
                <h1 className="center-self">We are checking your water bill.<br/>
                    You wiil get an email notification once we are done.</h1><br/>
                </div>
        </section>
        ); 
    }
}

export default LoginCheck;