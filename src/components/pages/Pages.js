import React, { Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './home/Main'
import Login from './login/Login'
import Select from './select/Select'
import Report from './report/Report'
import LoginSuccess from './login/LoginSuccess'
import LoginFail from './login/LoginFail'
import AskingPrice from './flow/AskingPrice'
import ProvidedInfo from './flow/ProvidedInfo'
import ReceivedInfo from './flow/ReceivedInfo'
import HighPrice from './flow/HighPrice'
import UserPage from './user-page/UserPage'
import AcquisitionCriteria from './criterias/AcquisitionCriteria'
import Property from './criterias/Property'
import BuyerOffers from './flow/BuyerOffers'
import LoginCheck from './login/LoginCheck'
import DocuSignPlaceholder from './flow/DocuSignPlaceholder'
import HaveAttorney from './steps/HaveAttorney'
import Card from './steps/Card'
import Steps from './steps/Steps'
import 'font-awesome/css/font-awesome.min.css'

class Pages extends Component {
    render() {
        return(
                <React.Fragment>
                    <Route exact path='/' component={Main} />
                    <Route path="/select/login" component={Login} />
                    <Route path="/report" component={Report} />
                    <Route path="/select" component={Select} />
                    <Route path="/login" component={Login} />
                    <Route path="/acquisition-criteria" component={AcquisitionCriteria} />
                    <Route path="/property" component={Property} />
                    <Route path="/login-success" component={LoginSuccess} />
                    <Route path="/login-fail" component={LoginFail} />
                    <Route path="/asking-price" component={AskingPrice} />
                    <Route path="/provided-info" component={ProvidedInfo} />
                    <Route path="/received-info" component={ReceivedInfo} />
                    <Route path="/asking-price-is-too-high" component={HighPrice} />
                    <Route path="/user_123" component={UserPage} />
                    <Route path="/buyer-offers" component={BuyerOffers} />
                    <Route path="/bill-check" component={LoginCheck} />
                    <Route path="/docusign" component={DocuSignPlaceholder} />
                    <Route exact path="/steps" component={Steps} />
                    <Route path='/steps/have-attorney' component={HaveAttorney} />
                    <Route path='/steps/card' component={Card} />
                </React.Fragment>
        );
    }
}

export default Pages;