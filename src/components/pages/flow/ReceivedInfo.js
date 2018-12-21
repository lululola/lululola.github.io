import React, {Component} from 'react'

class ReceivedInfo extends Component {

    constructor(props) {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log(this.props.history);
        this.props.history.push('/report');
    }
    render() {
        return(
            <section className="section received-info" data-anchor="received-info" id="received-info">
                <div className="container center-xy">
                    <h2 className="title">We have received your</h2>
                        <ul className="check center">
                            <li>Property info</li>
                            <li>Signed commission agreement</li>
                            <li>Rent roll & expenses</li>
                            <li>You will receive your first property sale report in 7 days</li>
                        </ul><br/>
                        <button className="btn one-third center-self space submit-btn" onClick={this.handleClick}>Start sale process</button>
                    </div>
                </section>
        )
    }
}

export default ReceivedInfo;