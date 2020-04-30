import React, { Component } from 'react';
import LandingPage from './components/landingPage';
import Blog from './components/blog.js';
import BlogPage from './components/blogPage.js';
import NavBar from './components/navBar.js';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Footer from '../src/components/footer'
import './App.css';
import { toggleMobile } from './actions/appActions.js'
import { connect } from 'react-redux';
import $ from 'jquery';
import Page404 from './components/404.js';
import PrivacyPolicy from './components/privacy_policy';
import TermsOfUse from './components/terms_of_use';
import AmazonScraper from './components/amazonScraper';
import youtubeDownloader from './components/youtubeDownloader';

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

      $(window).on('load', function(){
        setTimeout(removeLoader, 5000); //wait for page load PLUS two seconds.
      });
      function removeLoader(){
        $('#root').css({
          overflow: 'initial',
          opacity: '1'
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
                  <Route path='/blog/gallery/technology/computerengineering/:pageId' component={Blog} />
                  <Route path="/blog/article/:catagory/computerengineering/:blogId" component={BlogPage} /> 
                  <Route exact path="/privacy-policy" component={PrivacyPolicy} />
                  <Route exact path="/terms-of-use" component={TermsOfUse} />
                  <Route path="/amazon automation" component={AmazonScraper} />
                  <Route path="/youtube downloader" component={youtubeDownloader} />
                  <Route status={404} path="/404" component={Page404} />
                  <Redirect to="/404" />
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
