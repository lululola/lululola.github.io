import React, {Component} from 'react' 

class HighPrice extends Component {
    constructor(props){
        super();

        this.handleClick = this.handleClick.bind(this);

    }
    handleClick() {
        this.props.history.push({pathname: "/asking-price"})
    }
    render() {
        return(
            <section className="section price-high" data-anchor="price-high" id="price-high">
                <div className="main-titles-container container center-xy">
                        <h1 className="title bold">Your asking price is 25% more expensive</h1>
                        <p>than the market average in the neighbourhood</p><br/>
                        <button className="half center-self submit-btn bg-yellow space" onClick={this.handleClick}>Reconsider asking</button>
            </div>
        </section>
        )
    }
}

export default HighPrice;