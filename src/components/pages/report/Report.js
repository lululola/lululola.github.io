import React, { Component } from 'react'
import $ from 'jquery'

class Report extends Component {

    constructor(props) {
        super(props);

        this.state = {value: ""}

        this.formatNumber = this.formatNumber.bind(this);
        this.getData = this.getData.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    formatNumber(number) {
        var str = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        var index = str.indexOf(' ');
        var first = str.substr(0, index);
        var rest = str.substr(index + 1);
        return  first + '<span>' + rest + '</span>';
    }

    handleClick(e) {
        e.preventDefault();
        this.props.history.push('/user_123');
    }
    getData() {
        /*
        $.ajax({
            url: "../json-test-data/report.json",
            type: 'GET',
            dataType: 'json',
            success: function(parsed_json){
                this.setState({value: parsed_json});
            }.bind(this)
        });*/
        this.setState({value: {
            status: 45755,
            signed: 5755,
            interested: 2745,
            submitted: 5755
          }
        })
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        if(this.state.value === "") {
            return null;
        }
        else {
        return(
            <section className="section status-report" data-anchor="status-report" id="status-report">
                <div className="container center-xy">
                    <h2 className="title">Property sale status report</h2>
                    <div className="numbers-container">
                        <div className="item">
                            <h1 dangerouslySetInnerHTML={{__html: this.formatNumber(this.state.value.status)}}></h1>
                            <p>Property sale status report</p>
                        </div>
                        <div className="item">
                            <h1 dangerouslySetInnerHTML={{__html: this.formatNumber(this.state.value.signed)}}></h1>
                            <p>Signed confi for the property & received info</p>
                        </div>
                        <div className="item">
                            <h1 dangerouslySetInnerHTML={{__html: this.formatNumber(this.state.value.interested)}}></h1>
                            <p>Have expressed interest to tour</p>
                        </div>
                        <div className="item">
                            <h1 dangerouslySetInnerHTML={{__html: this.formatNumber(this.state.value.submitted)}}></h1>
                            <p>Submitted offers</p>
                        </div>
                    </div>
                    <button className="center-self one-third upload-btn btn space-l slide left" onClick={this.handleClick}>&nbsp;</button>
                </div>
            </section>
        );
        }
    }
}
export default Report;