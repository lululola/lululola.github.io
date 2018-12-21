import React, { Component } from 'react'
import UserInfo from './UserInfo'
import PropertyInfo from './PropertyInfo'
import ToursSchedule from './ToursSchedule'
import Diagram from './Diagram'
import OffersTable from './OffersTable'
import $ from 'jquery'

class UserPage extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.getData = this.getData.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    } 

    getData() {
        /*$.ajax({
            url: "../json-test-data/propertiesList.json",
            type: 'GET',
            dataType: 'json',
            success: function(parsed_json){
                this.setState({value: parsed_json});
            }.bind(this)
        });*/
        this.setState({value: {
            user: {
              img: 'https://via.placeholder.com/160x160',
              name: 'Name Surname',
              company: 'Upper East Side Property',
              tours: 239,
              flyers: 239,
              accepted: 'Cornell St',
              property: {
                address: '239 East 63rd Street',
                img: 'https://via.placeholder.com/320x200',
                description: 'Prime Upper East Side Multi Family',
                price: 4000000
              }
            },
            statistics: {
              potential_buyers: {
                week: 10,
                total: 24
              },
              similar_properties: {
                week: 3,
                total: 11
              },
              similar_properties_sold: {
                week: 1,
                total: 3
              },
              growth: {
                week: 13,
                total: 32
              },
              diagram: {
                img: 'https://via.placeholder.com/445x300'
              }
            },
            properties: [
              {
                id: 285729857,
                owner: {
                  name: 'Name Surname',
                  owned: 14,
                  sold: 6,
                  bought: 2
                },
                price: 4000000,
                deposit: 150000,
                diligence: 12,
                closing: 8,
                conditions: true,
                address: 'This is the address',
                financing: 'All cash',
                attorney: 'Name Surname'
              },
              {
                id: 348723523,
                owner: {
                  name: 'Name Surname',
                  owned: 32,
                  sold: 17,
                  bought: 10
                },
                price: 7000000,
                deposit: 840000,
                diligence: 18,
                closing: 14,
                conditions: false,
                address: 'This is the address',
                financing: 'All cash',
                attorney: 'Name Surname'
              }
            ]
          }})
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        if (!this.state.value) {
            return null;
        }
        else {
        return(
            <section className="seller-offers">
                <div className="container center-xy">
                <UserInfo user={this.state.value.user}/>
                <div className="content">
                    <div className="content-top">
                        <PropertyInfo property={this.state.value.user.property} />
                        <ToursSchedule statistics={this.state.value.statistics} />
                        <Diagram diagram={this.state.value.statistics.diagram} /> 
                    </div>
                    <OffersTable properties={this.state.value.properties} />
                </div>
                </div>
                <div className="process-diagram half center center-self">
                    <div className="svg-container">
                        <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 950 1920">
                            <path fill="none" d="M 150 138 L 150 30 L 400 30"/>
                            <path fill="none" d="M 815 138 L 815 30 L 620 30"/>
                            <path fill="none" d="M 480 138 L 480 50"/>
                        </svg>
                    </div>
                    <div className="diagram">
                        <div className="row">
                            <div className="bg-yellow center">Sale</div>
                        </div>
                        <div className="row space-l">
                            <a href="#documents" className="btn">Documents</a>
                            <a href="#process" className="btn">Process</a>
                            <a href="#offers" className="btn">Offers</a>
                        </div>
                    </div>
                </div>
            </section>
        );
        }
    }
}

export default UserPage;