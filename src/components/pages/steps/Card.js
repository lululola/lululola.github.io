import React, {Component} from 'react'
import avatar from '../../../img/avatar.png'
import StarRatingComponent from 'react-star-rating-component'
import $ from 'jquery'

class Card extends Component {

    constructor(props) {
        super();
        this.chooseAll = this.chooseAll.bind(this);
        this.state = {
            selected: []
        }
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         this.goBack = this.goBack.bind(this);
    }

    handleChange(e) {
        const selected = this.state.selected;
        let index;

        if(e.target.id === "choose-all") {
            if(e.target.checked) {
                var options = [];
                $('.card-checkbox').each(function(i, obj) {
                    options.push(obj.id);
                    
                });
                this.setState({
                    selected: options
                })
            } 
            else this.setState({selected: []})
            return;
        }
        if (e.target.checked) {
            selected.push(+e.target.id);
        } 
        else {
            index = selected.indexOf(+e.target.id);
            selected.splice(index, 1);
        }
         this.setState({ selected: selected })
    }

    handleSubmit(e) {
        e.preventDefault();
        alert("selected: " + this.state.selected)
    }
    chooseAll() {
        $('#choose-all').on('change', function(e) {
            var inputs = $('.card-checkbox');
            if(e.originalEvent === undefined) {
                var allChecked = true;
                inputs.each(function(){
                    allChecked = allChecked && this.checked;
                });
                this.checked = allChecked;
            } else {
                inputs.prop('checked', this.checked);
            }
        })
        $('.card-checkbox').on('change', function(){
            $('#choose-all').trigger('change');
        });
    }

    goBack() {
        this.props.history.push({
            pathname: "/steps"
        })
    }

    render() {
        return(
            <section className="section acquisition-criteria" data-anchor="acquisition-criteria" id="acquisition-criteria">
            <div className="container center center-xy">
            <a href="" className="back" onClick={this.goBack}><i className="fa fa-angle-left"></i>Back to deal process</a>
            <form className="lawyers" onSubmit={this.handleSubmit}>
            <div className="choose-all-wrapper">
                <label htmlFor="choose-all" className="choose-all">
            
                <input 
                    id="choose-all" 
                    type="checkbox"
                    onClick={this.chooseAll}
                    onChange={this.handleChange}
                />
                Choose All</label>
                </div>  
                <label htmlFor="1">
                <div className="person-card">
                <input id="1" type="checkbox" className="card-checkbox" defaultChecked={false} onChange={this.handleChange}/>
                    <div className="content">
                        <div className="avatar">
                        <img src={avatar} alt="avatar" />
                        </div>
                        <div>
                            <p className="name">Law Offices of <br/>Tanya Gomerman</p>
                            <div className="rating">
                            <StarRatingComponent 
                                name="rating" 
                                editing={false}
                                starCount={3}
                                value={5}
                                emptyStarColor={"#e4bf00"}
                                starColor={"#e4bf00"}
                            />
                            <p className="num-of-reviews"><span className="num-of-reviews">101</span> reviews</p>
                            </div>
                            <ul className="law-types">
                                <li>Personal Injury Law</li>
                                <li>Employment Law</li>
                            </ul>
                        </div>
                        <div>
                            <p className="company">Civic Center. Follmore,<br/> Western Addition</p>
                            <p className="address">601 Van Ness Ave, San Francisco, CA 94102</p>
                        </div>   
                    </div>
                    <div className="request">
                        <button className="request">Request a Consultation</button>
                        <p>Responds in about<br/> <span className="time-of-respond">20 minutes</span></p>
                    </div>
                </div>
                </label>
                <label htmlFor="2">
                <div className="person-card">
                <input id="2" type="checkbox" className="card-checkbox" defaultChecked={false} onChange={this.handleChange}/>
                    <div className="content">
                        <div className="avatar">
                        <img src={avatar} alt="avatar" />
                        </div>
                        <div>
                            <p className="name">Law Offices of <br/>Tanya Gomerman</p>
                            <div className="rating">
                            <StarRatingComponent 
                                name="rating" 
                                editing={false}
                                starCount={5}
                                value={3}
                            />
                            <p className="num-of-reviews"><span className="num-of-reviews">101</span> reviews</p>
                            </div>
                            <ul className="law-types">
                                <li>Personal Injury Law</li>
                                <li>Employment Law</li>
                            </ul>
                        </div>
                        <div>
                            <p className="company">Civic Center. Follmore,<br/> Western Addition</p>
                            <p className="address">601 Van Ness Ave, San Francisco, CA 94102</p>
                        </div>   
                    </div>
                    <div className="request">
                        <button className="request">Request a Consultation</button>
                        <p>Responds in about<br/> <span className="time-of-respond">20 minutes</span></p>
                    </div>
                </div>
                </label>
                <button className="bg-yellow center-self" type="submit">Request for proposal</button>
            </form>
            </div>
        </section>
        )
    }
}

export default Card;