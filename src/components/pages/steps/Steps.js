import React, {Component} from 'react' 
import Step from './Step'

class Untitled extends Component {

    constructor(props) {
        super();
        this.state = {
            currentStep: 0,
            totalSteps: 4,
            steps: undefined
        }
        this.getData = this.getData.bind(this);
        this.moveToCard = this.moveToCard.bind(this);
    }


    moveToCard() {
        this.props.history.push({
            pathname: "/steps/card"
        })
    }
    getData = () => {
        /*fetch("json-test-data/steps.json")
        .then(response => {
           if (response.ok) {
           return response;
         } 
        })
        .then(response => response.json())
        .then(json =>{
           this.setState({ steps: json.steps })
        });*/
        this.setState({
            steps: [
              {
                stepNumber: 1,
                stepTitle: 'Tour & Offer',
                subSteps: [
                  {
                    full: 'Schedule tour',
                    'short': 'Schedule tour'
                  },
                  {
                    full: 'Make offer',
                    'short': 'Make offer'
                  },
                  {
                    full: 'Counter offer received',
                    'short': 'COR'
                  },
                  {
                    full: 'Offer accepted',
                    'short': 'OA'
                  }
                ],
                status: 'active'
              },
              {
                stepNumber: 2,
                stepTitle: '3rd party providers for buyers',
                subSteps: [
                  {
                    full: 'Broker Collider',
                    'short': 'Broker Collider'
                  },
                  {
                    full: 'Choose Lender',
                    'short': 'Choose lender'
                  },
                  {
                    full: 'Order Title Search',
                    'short': 'OTS'
                  },
                  {
                    full: 'Choose Insurance',
                    'short': 'CI'
                  }
                ],
                status: 'disabled'
              },
              {
                stepNumber: 3,
                stepTitle: 'Contract',
                subSteps: [
                  {
                    full: 'Contract Issued',
                    'short': 'CI'
                  },
                  {
                    full: 'Contract Comments',
                    'short': 'CC'
                  },
                  {
                    full: 'Contract Ready',
                    'short': 'CR'
                  },
                  {
                    full: 'Contract Signed',
                    'short': 'CI'
                  }
                ],
                status: 'disabled'
              },
              {
                stepNumber: 4,
                stepTitle: 'Closing',
                subSteps: [
                  {
                    full: 'Broker Collider',
                    'short': 'Broker Collider'
                  },
                  {
                    full: 'Choose lender',
                    'short': 'Choose lender'
                  },
                  {
                    full: 'Order title search',
                    'short': 'OTS'
                  },
                  {
                    full: 'Choose insurance',
                    'short': 'CI'
                  }
                ],
                status: 'disabled'
              }
            ]
          });
  }

    componentDidMount() {
        this.getData();
  }
    
    goToNextStep = () => {
        this.setState({currentStep: this.state.currentStep + 1});
    }

    render() {
        if(this.state.steps === undefined) {
            return null;
        }
        else {   
            return(
                <section style={{backgroundColor: "black"}} className="section purchase-process" data-anchor="purchase" id="purchase">
                    <div className="container center center-xy">
                        <div className="process-wrapper" onClick={this.moveToCard}>
                        <Step value={this.state.steps[0]} />
                        <Step value={this.state.steps[1]} />
                        <Step value={this.state.steps[2]} />
                        <Step value={this.state.steps[3]} />
                        </div>
                    </div>
                </section>
            )
        }
    }
}

export default Untitled;