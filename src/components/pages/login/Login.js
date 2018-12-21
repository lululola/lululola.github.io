import React from 'react';

let test = {
  email: 'email@gmail.com',
  cellphone: '1111'
}

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
      const target = e.target;
      this.setState({
        [target.name]: target.value
      });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if(JSON.stringify(this.state) === JSON.stringify(test)) {
        this.props.history.push({
          pathname: "/login-success",
          state : {
              type: this.props.location.state.type
          }
        }); 
      }
      else {
        this.props.history.push({
          pathname: "/login-fail",
          state : {
            type: this.props.location.state.type
          }
        });
      }
    }
    
  
    render() {
      return (
        <section className="section login-buyer">
            <div className="container center center-xy">
                <h1 className="title center-self">We have identified {this.props.location.state.result} {this.props.location.state.type === "buyer" ? " properties" : " buyers"}</h1>
                <h1 className="title center-self">Log in</h1>
                <div className="form-container">
                    <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Corporate email</label>
                    <input type="text" name="email" id="email" onChange={this.handleChange} defaultValue="" required/>
                    <label htmlFor="cellphone">Cell phone</label>
                    <input type="text" name="cellphone" id="cellphone" defaultValue="" onChange={this.handleChange} required/>
                    <button className="bg-yellow center-self" type="submit">Ok</button>
                    </form>
                </div>
            </div>
        </section>
      );
    }
  }

  export default Login;