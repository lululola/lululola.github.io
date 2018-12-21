import React, {Component} from 'react' 

class HaveAttorney extends Component {
    constructor(props) {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goBack = this.goBack.bind(this);
    }
    handleChange(e) {
        const target = e.target;
        this.setState({
          [target.name]: target.value
        });
      }
    
      handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        //send this to url
        this.props.history.push({
            pathname: "/login", 
            state: {
                type: "buyer", 
                result: 42
            }
        });
    }

    goBack(e) {
        e.preventDefault();
        this.props.history.push('/');

    }

    render() {
        return(
            <section className="section acquisition-criteria">
                <div className="container center center-xy">
                <a href="" className="back" onClick={this.goBack}><i className="fa fa-angle-left"></i>Back to deal process</a>
                    <div className="form-container">
                        <form className="grey-form" onSubmit={this.handleSubmit}>
                            <h1 className="title center-self capitalize">Please enter attorney info</h1>
                            <p className="center-self">Don't worry. We will not contact with your Lawyer</p><br/><br/>
                            <div className="form-row">
                                <label htmlFor="name">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    onChange={this.handleChange} 
                                    defaultValue="" 
                                    placeholder="Enter name"
                                    required
                                />
                            </div>
                            <div className="form-row">
                                <label htmlFor="phone">Phone</label>
                                <input 
                                    type="text" 
                                    name="phone" 
                                    id="phone" 
                                    onChange={this.handleChange} 
                                    defaultValue="" 
                                    placeholder="Enter phone"
                                    required
                                />
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="text" 
                                    name="email" 
                                    id="email" 
                                    onChange={this.handleChange} 
                                    defaultValue="" 
                                    placeholder="Enter email"
                                    required
                                />
                            </div>
                            <button className="bg-yellow center-self" type="submit">Submit and go back</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default HaveAttorney;