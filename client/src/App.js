import React, { Component } from 'react';
import LandingPage from './components/landingPage';
import Blog from './components/blog.js';
import BlogPage from './components/blogPage.js';
import NavBar from './components/navBar.js';
import AmazonScraper from '../src/components/amazonScraper.js';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Footer from '../src/components/footer'
import './App.css';
import { toggleMobile } from './actions/appActions.js'
import { connect } from 'react-redux';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: true
    };
  }

  componentDidMount() {
    // event listeners
    window.addEventListener('resize', this.checkWindowDimensions);

    if ( window.innerWidth < 901 && !this.props.mobile ){
      this.props.toggleMobile('ON');
    } else if ( window.innerWidth >= 901 && this.props.mobile ){
      console.log(`called update`);
      this.props.toggleMobile('OFF');
    }
    $('body').prepend(`
        <div id="animationWindow" style="position:fixed; background-color: white; z-index: 10000000">
        <div class='legoContainer'>
        <div class='lego lego-4'>
        <div class='circles circles-1'></div>
        <div class='circles circles-2'></div>
      </div>
      <div class='lego lego-3'>
        <div class='circles circles-1'></div>
        <div class='circles circles-2'></div>
      </div>
      <div class='lego lego-2'>
        <div class='circles circles-1'></div>
        <div class='circles circles-2'></div>
      </div>
      <div class='lego lego-1'>
        <div class='circles circles-1'></div>
        <div class='circles circles-2'></div>
      </div>
      <div class='lego lego-0'>
        <div class='circles circles-1'></div>
        <div class='circles circles-2'></div>
      </div>
      </div>
      </div>
    `);

      $(window).on('load', function(){
        setTimeout(removeLoader, 5000); //wait for page load PLUS two seconds.
      });
      function removeLoader(){
        $('#root').css({
          overflow: 'initial'
        });
          $( "#animationWindow" ).fadeOut(500, function() {
            // fadeOut complete. Remove the loading div
            
            $( "#animationWindow" ).remove(); //makes page more lightweight 
        });  
      }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkWindowDimensions);
  }

  checkWindowDimensions = () => {
    // call a re-render upon resizing
    if ( window.innerWidth < 901 && !this.props.mobile ){
      this.props.toggleMobile('ON');
    } else if ( window.innerWidth >= 901 && this.props.mobile ){
      console.log(`called update`);
      this.props.toggleMobile('OFF');
    }
  }

  render() {

          return (
            <main>
              <NavBar />
              <Router forceRefresh="true">
                <Switch>
                  <Route exact path='/' component={LandingPage} />
                  <Route exact path='/amazonTool' component={AmazonScraper} />
                  <Route path='/blog/page/:pageId' component={Blog} />
                  <Route path="/blog/post/:blogId" component={BlogPage} />
                </Switch>
              </Router>
              <Footer />
            </main>
          );

    }
}

const mapStateToProps = state => (
  { mobile: state.AppReducer.mobile }
)

export default connect(mapStateToProps, { toggleMobile })(App);
