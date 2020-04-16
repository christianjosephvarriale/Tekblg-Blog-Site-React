/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

import logo from '../img/logo/t.png';

import '../css/main.css';
import Button from './button';
import { NavLink, Link, BrowserRouter as Router } from "react-router-dom"; 
import { createBrowserHistory } from "history";

import Subscription from './subscription';
import { connect } from 'react-redux';
import { toggleSubscriptionState } from '../actions/pageActions';

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
        // bindings
    }
    
    componentWillUnmount() {
        // Unbind listener
        this.backListener();
    }

    componentDidMount() {

        // if the proper cookie tag is not set then show subscribe modal
        if (!document.cookie.includes('subscribed=true')) {
            this.props.toggleSubscriptionState();
        }
    }

    handleSubmit = () => {
        document.getElementById("paypal").submit();
    }

    render(){
        const { mobile } = this.props.state.AppReducer

        // conditionally render header text
        let headerText;
        if (!mobile) {
            headerText = <h1>
                <span style={{color:'#00a3d6'}}>T</span>
                <span style={{color:'#f43044'}}>e</span>
                <span style={{color:'#4fad13'}}>k</span>
                <span style={{color:'#ffbc27'}}>b</span>
                <span style={{color:'#f9dd06'}}>l</span>
                <span style={{color:'#00a3d6'}}>g</span>
            </h1>
        }

        return (
            <Router forceRefresh="true">

                <Subscription />
                
                <header id="header" class="s-header header">
                <a class="header__toggle-menu" href="#0" title="Menu"><span>Menu</span></a>

                <div id="logo" class="pull-left">
                        <Link to="/">
                            <img style={{ height: 60, margin: 30 }} src={logo} alt="Tekblg Logo" title="Tekblg" />
                        </Link>    
                        {headerText}
                </div>

                <nav class="header__nav-wrap">

                <h2 class="header__nav-heading h6">Navigate to</h2>

                <ul style={{display:'block'}}class="header__nav">
                
                <li role="menuitem"><a style={{color: '#00a3d6'}} href="#" onClick={(e) => this.props.toggleSubscriptionState()}>Subscribe</a></li>
                <li role="menuitem"><NavLink style={{color: '#ffbc27'}} to="/blog/page/1" role="menuitem">Blog</NavLink></li>
                <li role="menuitem">
                    <form id="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                        <input type="hidden" name="cmd" value="_s-xclick" />
                        <input type="hidden" name="hosted_button_id" value="KU96VMCNZELB6" />
                        <Button handleClick={this.handleSubmit} label={'Donate'}/>
                    </form>
                </li>

                {/* <li role="menuitem"><a href="#about">About</a></li>
                <li role="menuitem"><a href="#features">Features</a></li>
                <li role="menuitem"><a href="#pricing">Pricing</a></li>
                <li role="menuitem"><a href="#team">Team</a></li>
                <li role="menuitem"><a href="#gallery">Gallery</a></li>
                <li role="menuitem"><a href="#contact">Contact</a></li>

                <li role="menuitem"><NavLink to="/blog/page/1" role="menuitem">Blog</NavLink></li>
                <li class="has-children">
                    <a href="#0" title="">Products</a>
                    <ul class="sub-menu">       
                        <li><NavLink to="/amazonTool" role="menuitem">Amazon</NavLink></li>
                        <li><NavLink to="/yahooTool" role="menuitem">Yahoo</NavLink></li>
                    </ul>
                </li> */}
                </ul> 

                <a href="#0" title="Close Menu" class="header__overlay-close close-mobile-menu">Close</a>

                </nav> 
                </header>
            </Router>    
            );
    }
}

const mapStateToProps = state => (
    { state: state }
)

export default connect(mapStateToProps, { toggleSubscriptionState })(NavBar);