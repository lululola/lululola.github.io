import React, {Component} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from '../pages/home/header/Header'
import Pages from '../pages/Pages'
import Footer from '../pages/home/footer/Footer'
import PageSwitcher from '../pages/page-switcher/PageSwitcher'
import {FooterContext} from '../../assets/FooterContext'

class App extends Component {

    constructor(props) {
        super(props);
    
        this.toggleFooter = (state) => {
          this.setState(state => ({
            page:
              state.page === "page"
                ? "home"
                : "page",
          }));
        };
    
        this.state = {
          page: "page",
          toggleFooter: this.toggleFooter,
        };
    }
    render() {
        return(
            <FooterContext.Provider value={this.state}>
            
                    <React.Fragment>
                        <Header />
                        <Pages />
                        <PageSwitcher />
                        <Footer />
                    </React.Fragment>
                
            </FooterContext.Provider>
        )
    }
}

export default App;