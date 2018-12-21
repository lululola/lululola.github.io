import React, {Component} from 'react'

let test = "1111"
class LoginSuccess extends Component {

    constructor(props) {
        super();
        this.state={};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        this.setState({
          [target.name]: target.value
        });
      }

    handleSubmit(e) {
    e.preventDefault();
    //dummy redirect
    if(JSON.stringify(this.state.code) === JSON.stringify(test)) {
        if(this.props.location.state.type === "seller") {
            this.props.history.push({
                pathname: "/provided-info",
                state: {
                    min: 2.4,
                    max: 5.2,
                    buyers: 32
                }
            }); 
        }
        else {
            this.props.history.push({
                pathname: "/buyer-offers"
            });
        }
    }
    else {
        console.log("validation failed");
        //this.props.history.push({
        //pathname: "/"
        //});
    }
    }
      
    render() {
        return(
            <section className="section login-success" data-anchor="login-success" id="login-success">
            <div className="container center center-xy">
                <h1 className="title center-self bold uppercase">Thank you!</h1>
                <h1 className="center-self">Your email match our records</h1><br/><br/>
                <div className="form-container">
                    <form id="login" onSubmit={this.handleSubmit}>
                        <label htmlFor="code">Validation code</label>
                        <input type="text" name="code" id="code" onChange={this.handleChange} required/>
                        <button className="bg-yellow center-self" type="submit">OK</button>
                    </form>
                </div>
            </div>
        </section>
        );
    }
}

export default LoginSuccess;