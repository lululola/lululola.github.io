import React, { Component } from 'react'
import $ from 'jquery'
//var CanvasJSReact = require('./canvasjs.react')
//var CanvasJS = CanvasJSReact.CanvasJS
//var CanvasJSChart = CanvasJSReact.CanvasJSChart

class Diagram extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ""}

        this.getData = this.getData.bind(this);
    }

    getData() {
        /*$.ajax({
            url: "../diagramData.json",
            type: 'GET',
            dataType: 'json',
            success: function(parsed_json){
                this.setState({value: parsed_json});
            }.bind(this)
        });*/
        
    }

    render() {
        return(
            <div className="diagram">
                <h3>Views of your listings</h3>
                <a href=""><img src={this.props.diagram.img} alt=""/></a>
            </div>
        );
    }
}

export default Diagram;