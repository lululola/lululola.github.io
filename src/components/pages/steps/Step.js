import React, {Component} from 'react'
import Tick from './Tick'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '../../../css/datepicker.css'
class Step extends Component {
    constructor(props) {
        super();
        this.state = {
            status: "",
            subStepCounter: 0,
            isActive: null,
            changedProp: null,
        }
    }

    

    componentDidMount() {
        
            this.props.value.status === "active" 
            ? this.setState({isActive: true}) 
            : this.setState({isActive: false})
    }
    componentDidUpdate(prevProps){
        if(prevProps.changedProp !== this.props.changedProp){
            this.setState({          
                changedProp: this.props.changedProp
            });
        }
        /*
        <DateRangePicker
            startDateId="startDate"
            endDateId="endDate"
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
            focusedInput={this.state.focusedInput}
            onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
            />
        */
    }
    render() {
        var state = this.state;
        const subSteps = this.props.value.subSteps.map(function(prop, i){
            return(
                <li key={i}>
                    <Tick/>
                    {
                        state.isActive 
                        ? <button disabled>{prop.full}</button> 
                        : <button disabled>{prop.short}</button>
                    }    
                </li>
            )
        })
        return(
            <div className={"process-step " + this.props.value.status}>
                <div className="process-title">
                    <span className="step-number">{this.props.value.stepNumber}</span>
                    {this.props.value.stepTitle}
                </div>
                <div className="process-content">
                    <ul>
                        {subSteps}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Step;
