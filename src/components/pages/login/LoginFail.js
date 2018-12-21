import React, {Component} from 'react'

class LoginFail extends Component {

    constructor(props){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {}
    }

    handleChange(e) {
        const target = e.target;
        this.setState({
          [target.name]: target.value
        });
    }
    handleSubmit(e) {
            e.preventDefault();
            console.log('submitted');
            this.props.history.push({
                pathname: "/bill-check",
                state: {
                    file: ""
                }
            });
    }

    render() {
        return(
            <section className="section login-fail" data-anchor="login-fail" id="login-fail">
            <div className="container center center-xy">
                <h1 className="title center-self bold uppercase">Thank you!</h1>
                <h1 className="center-self">Provided e-mail do not match our records.<br/>
                    Please submit property water bill that confirms your identity</h1><br/><br/><br/>
                <div className="form-container">
                    <form id="login-fail" onSubmit={this.handleSubmit}>
                        <div className="btn-container center-self">
                            <button className="upload-btn half">
                                <i className="fa fa-paperclip"></i>Water bill
                            </button>
                            <input className="half" type="file" name="file" required onChange={this.handleChange}/>
                        </div><br/><br/>
                        <button className="bg-yellow center-self half" type="submit">Submit</button>
                    </form> 
                </div>
                </div>
        </section>
        ); 
    }
}

export default LoginFail;