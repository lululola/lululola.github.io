import React, { Component } from 'react'

class ToursSchedule extends Component {
    render() {
        if(this.props.length === 0) {
        return null
        }
        else {
        return( 
            <table className="tours-schedule">
                <thead>
                    <tr>
                        <td><h3>Tours scheduled</h3></td>
                        <td>Week</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Potential active buyers in Collider</td>
                        <td>{this.props.statistics.potential_buyers.week}</td>
                        <td>{this.props.statistics.potential_buyers.total}</td>
                    </tr>
                    <tr>
                        <td>Similar properties for sale</td>
                        <td>{this.props.statistics.similar_properties.week}</td>
                        <td>{this.props.statistics.similar_properties.total}</td>
                    </tr>
                    <tr>
                        <td>Similar properties sold via Collider in last 12 months</td>
                        <td>{this.props.statistics.similar_properties_sold.week}</td>
                        <td>{this.props.statistics.similar_properties_sold.total}</td>
                    </tr>
                    <tr>
                        <td>Value growth last month</td>
                        <td>{this.props.statistics.growth.week}%</td>
                        <td>{this.props.statistics.growth.total}%</td>
                    </tr>
                </tbody>
            </table>
            
        );}
    }
}

export default ToursSchedule;