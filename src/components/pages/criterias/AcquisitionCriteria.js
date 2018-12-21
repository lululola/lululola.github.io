import React, {Component} from 'react'

class AcquisitionCriteria extends Component {

    constructor(props) {
        super(props);
    
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
            <section className="section acquisition-criteria" data-anchor="acquisition-criteria" id="acquisition-criteria">
                <div className="container center center-xy">
                <a href="" className="back" onClick={this.goBack}><i className="fa fa-angle-left"></i>Back</a>
                    <h1 className="title center-self">Tell us more about your acquisition criteria</h1>
                    <div className="form-container">
                        <form id="acquisition" onSubmit={this.handleSubmit}>
                            <label htmlFor="neighbourhood">Neighbourhood</label>
                            <input type="text" name="neighbourhood" id="neighbourhood" onChange={this.handleChange} defaultValue="" required/>
                            <label htmlFor="prop-type">Property type</label>
                            <input type="text" name="property" id="prop-type" onChange={this.handleChange} defaultValue="" required/>
                            <label htmlFor="cap-rate">Minimal cap rate</label>
                            <input type="text" name="rate" id="cap-rate" onChange={this.handleChange} defaultValue="" required/>
                            <label htmlFor="min">Deal volume</label>
                            <div className="form-line" id="deal-volume">
                                <input type="text" name="min" placeholder="Min" id="min" onChange={this.handleChange} defaultValue="" required/>
                                <input type="text" name="max" placeholder="Max" id="max" onChange={this.handleChange} defaultValue="" required/>
                            </div>
                            <button className="bg-yellow center-self" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default AcquisitionCriteria;