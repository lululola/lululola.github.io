import React, {Component} from 'react'

class Property extends Component {
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
                type: "seller", 
                result: 32
            }
        });
    }

    goBack(e) {
        e.preventDefault();
        this.props.history.push('/');

    }

    render() {
        return(
            <section className="section property" data-anchor="property-worth" id="property-worth">
        <div className="container center-xy">
                <a href="" className="back" onClick={this.goBack}><i className="fa fa-angle-left"></i>Back</a>
                    <div className="main-titles-container half-height">
                        <div className="main-titles">
                        <div className="yellow-square"></div>
                        <h1 className="bold">Welcome</h1>
                        <p>
                            Tell us more about your property
                        </p>
                        </div>
                    </div>
                    <div className="form-container property-info">
                        <form id="property-info"  onSubmit={this.handleSubmit}>
                            <input className="half" type="text" name="address" id="address" placeholder="Address" required onChange={this.handleChange}/>
                            <div className="row">
                            <input className="one-third" type="text" name="sf" id="sf" placeholder="Total SF" required onChange={this.handleChange}/>
                            <input className="one-third" type="text" name="net" id="net" placeholder="Net operating" required onChange={this.handleChange}/>
                            <div className="btn-container one-third">
                                <button className="upload-btn third">
                                    <i className="fa fa-paperclip"></i>Floorplan
                                </button>
                                <input type="file" name="file" required onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <input className="one-third" type="text" name="income" id="income" placeholder="Gross income" required onChange={this.handleChange}/>
                            <div className="btn-container one-third">
                                <button className="upload-btn third">
                                    <i className="fa fa-paperclip"></i>Photos
                                </button>
                                <input type="file" name="file" required onChange={this.handleChange} multiple/>
                            </div>
                            <select className="one-third" name="type" id="type" required onChange={this.handleChange} defaultValue="">
                                <option value="" disabled>Property type</option>
                                <option value="1">type1</option>
                                <option value="2">type2</option>
                            </select>
                        </div>
                        <div className="row">
                                <input className="one-third" type="text" name="investment" id="investment" placeholder="Investment" required/>
                                <input className="one-third" type="text" name="development" id="development" placeholder="Development" required/>
                                <input className="one-third" type="text" name="conversion" id="conversion" placeholder="Conversion" required/>
                        </div>
                            <button className="bg-yellow center-self" type="submit">Submit</button>
                        </form>
                    </div>
                </div> 
    </section>
        )
    }
}


export default Property;