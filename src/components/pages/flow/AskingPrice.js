import React, {Component} from 'react'
import $ from 'jquery'

class SignButton extends Component {

    constructor(props) {
        super();
        
        this.handleSign = this.handleSign.bind(this);
    }

    handleSign(e) {
        e.preventDefault();
        this.props.history.push('/received-info');
    }
    render() {
        return(
            <button id="sign" onClick={this.handleSign} className="submit-btn bg-yellow half center-self">Sign commission agreement</button>
        )
    }
}

class AskingPrice extends Component {

    constructor(props) {
        super();
        this.state = {
            isPriceTooHigh: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        /*if([target.name] == "files[]") {
                var fileList = $("input[type='file'")[0].files;
                if (fileList.length > 2) {
                    alert("You can select only 2 images");
                    target.value = [];
                    return false;
                } 
            $('.upload-btn').addClass('upload-success');
        }  */

        //when one button - replace target name with 'files[]'

        if([target.name].toString().indexOf("file") !== -1) {
            console.log(target.name.toString());
            $('input[name="' + target.name.toString()  + '"]')
            .parent().find('.upload-btn')
            .addClass('upload-success');
        } 
        this.setState({
          [target.name]: target.value
        });
      }
    
    handleSubmit(e) { 
        e.preventDefault();

        var average = 100000;
        if((this.state.price/average) > 1.25) {
            this.props.history.push({
                pathname: "/asking-price-is-too-high"
                }); 
        }
        else {
            this.setState({isPriceTooHigh: false})
        }
    }
    render() {
        return(
            <section className="section asking-price" data-anchor="asking-price" id="asking-price">
                <div className="form-container container">
                    <form id="askprice" onSubmit={this.handleSubmit}>
                        <label htmlFor="price">Asking price</label>
                        <input className ="half" type="text" name="price" id="price" onChange={this.handleChange} required/>
                        <div className="btn-container half">
                            <button className="upload-btn">
                                <i className="fa fa-paperclip"></i>Attach rent roll & expenses 1
                            </button>
                            <input type="file" name="file1" onChange={this.handleChange} required />
                        </div>
                        <div className="btn-container half">
                            <button className="upload-btn">
                                <i className="fa fa-paperclip"></i>Attach rent roll & expenses 2
                            </button>
                            <input type="file" name="file2" onChange={this.handleChange} />
                        </div>
                        <label htmlFor="comments">Comments</label>
                        <textarea name="comments" id="comments" onChange={this.handleChange}></textarea>
                        <button className="submit-btn bg-yellow one-third center-self" type="submit">Submit</button><br/>
                        {this.state.isPriceTooHigh ? null : <SignButton history={this.props.history}/>}
                    </form>
                </div>
            </section>
        )
    }
}

export default AskingPrice;