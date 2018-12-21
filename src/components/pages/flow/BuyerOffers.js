import React, {Component} from 'react'
import $ from 'jquery'

class BuyerOffers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: ""
        }

        this.getData = this.getData.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.moveToSteps = this.moveToSteps.bind(this);
    }

    getData() {
       /* $.ajax({
            url: "../json-test-data/buyerOffers.json",
            type: 'GET',
            dataType: 'json',
            success: function(parsed_json){
                this.setState({properties: parsed_json});
            }.bind(this)
        })*/
        this.setState({properties :[
            {
              neighbourhood: 'Upper East Side',
              sf: 2500,
              type: 'multifamily',
              cap: 4.5
            },
            {
              neighbourhood: 'Upper West Side',
              sf: 1200,
              type: 'studio',
              cap: 6
            },
            {
              neighbourhood: 'Upper East Side',
              sf: 2500,
              type: 'multifamily',
              cap: 4.5
            },
            {
              neighbourhood: 'Upper West Side',
              sf: 1200,
              type: 'studio',
              cap: 6
            }
          ]})
    }
    handleClick() {
        this.props.history.push({
            pathname: '/docusign'
        })
    }

    moveToSteps() {
            this.props.history.push({
                pathname: "/steps"
            });
        }
    
    componentDidMount() {
        this.getData();     
    }

    render() {
        if (!this.state.properties) {
            return null;
        }
        else {
            const properties = this.state.properties.map(function(prop, i) {

                return (
                    <div key={i} class="info-box">
                        <div class="info center-self">
                            {prop.neighbourhood}, +-{prop.sf}SF, {prop.type}, {prop.cap}% going in cap.
                        </div>
                        <button class="bg-yellow accept" onClick={this.moveToSteps}>Agreement</button>
                    </div>
                );
            }, this);

            return(
                <section class="buyer-offers">
                    <div class="container center center-xy">
                            <h1 class="title center-self">We have identified 25 properties</h1>
                            <p class="center-self">that match your acquisition criteria</p>
                            <div class="properties center-self">
                                {properties}
                        </div>
                    </div>
                </section>
            )
        }
    }
    
}

export default BuyerOffers;