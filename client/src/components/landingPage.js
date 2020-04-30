import React, { Component } from 'react';
import jquery from 'jquery';
import '../lib/bootstrap/css/bootstrap.min.css';
import '../lib/animate/animate.min.css';
import '../lib/magnific-popup/magnific-popup.css';
import '../css/style.css';
import Button from './button';
import TypeIt from 'typeit';
import LazyLoad from 'react-lazyload';
import { Helmet } from 'react-helmet';

import { connect } from 'react-redux';
import '../css/code.css'
import { NavLink, BrowserRouter as Router } from 'react-router-dom';

// define jQuery as part of the window
window.jQuery = jquery;
const $ = jquery

require("../lib/bootstrap/js/bootstrap.bundle.min.js");
const WOW = require("../lib/wow/wow.min.js");
require("../lib/magnific-popup/magnific-popup.min.js");
require("../js/main.js");

class LandingPage extends Component {
    constructor(props) {
      super(props);
      this.state = { };
    }

    componentDidMount() {

        new WOW().init()

        setTimeout(() => {

            new TypeIt("#text", {
                speed: 100,
                waitUntilVisible: true
            })
                .type("Let's build")
                .pause(100)
                .delete(5)
                .type("Learn")
                .pause(100)
                .delete(5)
                .type("Design")
                .pause(100)
                .break()
                .type("<em style='color:#00a3d6' >Somting Awsme</em>")
                .move(-10)
                .type("e")
                .pause(50)
                .move(1)
                .type("h")
                .pause(50)
                .move(6)
                .type("e")
                .pause(50)
                .move(1)
                .type("o")
                .move(3)
                .go();

            new TypeIt("#code", {
                speed: 20,
                waitUntilVisible: true
            })
            .type("$ ")
            .pause(1500)
            .type("Your one stop-shop for all things Computer Engineering")
            .pause(1500)
            .break()
            .type("$ ")
            .pause(1500)
            .type("Pickup real world knowledge")
            .pause(1500)
            .break()
            .type("$ cat tekblgServices.js")
            .pause(1500)
            .break()
            .type("&lt;script&gt;")
            .pause(1500)
            .break()
            .type("for ( let content in Tekblg&#46;Content&#59 ) &#123;")
            .pause(1500)
            .break()
            .type("&nbsp;&nbsp;freeBlogPosts(); // Freemium is the way to go")
            .pause(1500)
            .break()
            .type("&nbsp;&nbsp;detailedTechnicalPosts(); // SEO clickbait ain't right")
            .pause(1500)
            .break()
            .type("&nbsp;&nbsp;awesomeMerchandiseAndApps(); // You're welcome")
            .pause(1500)
            .break()
            .type("&lt;/script&gt;")
            .break()
            .pause(1500)
            .type("$ ")
            .go();


                let i = 0;
                var intervalID = setInterval(function () {

                    $('#codeContainer').removeClass('prettyprinted');
                    window.PR.prettyPrint()

                    if (++i === 100) {
                        window.clearInterval(intervalID);
                    }
                }, 1000);
        }, 5000)

    }

    render() {

            return (
                <div>

                    <Helmet>
                        <meta name="description"  content="We build awesome code using Javascript libraries like NodesJS detailing applicational technical blog posts within computer engineering adapted from the University of Waterloo's Engineering ciriculum" />
                        <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></script>
                    </Helmet>

                    <main id="main">

                        <section id="intro">
                            <div style={{marginTop: 30,background: `url('https://images.ctfassets.net/5zy76n4olg5p/Hryl5ey0OE8nujJDTd4q1/3a2e8f88ab3693e01501262afc6f33b0/lego.png?w=${this.props.mobile ? 800 : Math.round(window.innerWidth)}&fm=jpg&fl=progressive') center top no-repeat`, backgroundSize: 'cover',zIndex: 0}}className={'banner'} />
                            <div class="intro-text">
                                <img style={{ width: '90%', maxWidth:500, zIndex: 1}} src={`https://images.ctfassets.net/5zy76n4olg5p/3clyQJTsKfgFoqZICDPR4A/649de57c7198efc28bed05b1bed43bed/tekblg.png?w=${Math.round(window.innerWidth) > 500 ? 500 : Math.round(window.innerWidth)}&fm=jpg&fl=progressive`} />
                                <p style={{fontWeight: 600, color: '#f43044', width:'100%', marginBottom: 60}} id='text'></p>
                                
                                <Router forceRefresh="true">
                                    <NavLink to={'/blog/gallery/technology/computerengineering/1'}>
                                        <Button label={'Go To Blog'}/> 
                                    </NavLink>
                                </Router>
                            </div>
                        </section>
                        
                     {/* <section id="about" class="section-bg">
                        <div class="container-fluid"> */}
                        {/* <div class="section-header">
                            <h3 class="section-title">About Us</h3>
                            <span class="section-divider"></span>
                            <p class="section-description">
                                We believe tech can be fun <br/>
                            </p>
                        </div> */}

                        {/* <div class="row">
                            <div style={{padding:20}} class="col-lg-6 about-img wow fadeInLeft">
                            <img src={block} alt="" />
                            </div>

                            <div style={{padding:20}} class="col-lg-6 content wow fadeInRight">
                                <h2> New approach to technical education </h2>
                                <h3> We're frustrated with theoretical based teaching </h3>
                                <p> Blogs are filled with short tutorials with niche content, we'll teach you knowledge to build meaningful projects </p>
                            </div>
                        </div> */}

                        {/* </div>
                    </section> */}

                    <section id="more-features" class="section-bg">
                        <div class="container">

                        <div class="section-header">
                            <h3 class="section-title">Oh we've got products</h3>
                            <span class="section-divider"></span>
                            <p class="section-description">Whether it's educational or ready to use </p>
                        </div>

                        <div style={{marginBottom: 60}} class="row">

                            <div style={{padding:'20px 20px 0 20px'}} class="col-lg-6">
                            <div class="box wow fadeInLeft">
                                <div class="icon">
                                    <LazyLoad placeholder={<p>Lazy Loading...</p>}><img src={'https://images.ctfassets.net/5zy76n4olg5p/6LY5VHi8aJjCPoViTqQAeP/2f593400cbf7a87519e91036efb62874/chip.svg?w=150&fm=jpg&fl=progressive'} /></LazyLoad></div>
                                <div>
                                    <h4 class="title">Buzz Topics & Applications</h4>
                                    <p class="description">Demystify Machine Learning and cloud computing applications for your next project</p>
                                </div>
                                </div>
                            </div>

                            <div style={{padding:'20px 20px 0 20px'}} class="col-lg-6">
                            <div class="box wow fadeInRight">
                                <div class="icon"><LazyLoad placeholder={<p>Lazy Loading...</p>}><img src={'https://images.ctfassets.net/5zy76n4olg5p/5UuVvh3u6G0GDMGhs5sI2x/75355590ebf88e9fac7961b3ade96ebf/mining.svg?w=150&fm=jpg&fl=progressive'} /></LazyLoad></div>
                                <div>
                                    <h4 class="title">Ready to use tools and components</h4>
                                    <p class="description"> Don't re-invent the wheel. We've got everything from Data Pipelines and hardware schematics, to generic handy software with code explainations</p>
                                </div>
                                </div>
                            </div>

                            <div style={{padding:'20px 20px 0 20px'}} class="col-lg-6">
                            <div class="box wow fadeInLeft">
                                <div class="icon"><LazyLoad placeholder={<p>Lazy Loading...</p>}><img src={'https://images.ctfassets.net/5zy76n4olg5p/LSZLsQWy9mTOH2f7Hvq65/54589993a0a1502120d7890264d93938/online-class.svg?w=150&fm=jpg&fl=progressive'} /></LazyLoad></div>
                                <div>
                                    <h4 class="title">Learn Computer Engineering coursework</h4>
                                    <p class="description">Courses in engineering are seldom taught well. Learn about advanced concepts in programming and hardware design.</p>
                                </div>
                               </div>
                            </div>

                            <div style={{padding:'20px 20px 0 20px'}} class="col-lg-6">
                            <div class="box wow fadeInRight">
                                <div class="icon"><LazyLoad placeholder={<p>Lazy Loading...</p>}><img src={'https://images.ctfassets.net/5zy76n4olg5p/2Evn0ECpqKD1EJqQh4iVo8/848387c5e77c6afc9122b9c2c84e570e/led.svg?w=150&fm=jpg&fl=progressive'} /></LazyLoad></div>
                                <div>
                                    <h4 class="title">Purchase well designed products</h4>
                                    <p class="description">License awesome code, purchase geeky hardware systems and buy apparel to show the tech world what you stand for</p>
                                </div>
                              </div>
                            </div>

                        </div>
                        </div>
                    </section>

                    <div style={{width:'80%', margin:'auto'}} className="codeBox">
                        <div className="codeHeader">
                            <p style={{padding: '3px 5px',marginTop:3,textAlign: 'center',color: 'black', fontWeight:500}}>
                                Terminal
                                <span style={{height: 0,float: 'right',fontSize: 54,color: '#fff',marginTop: -37 ,marginRight: 4}}>
                                •
                                </span>
                            </p>
                        </div>
                        <pre id='codeContainer' className="prettyprint" style={{width:'100%',margin:0,borderRadius:0}}>
                            <code id='code' />
                        </pre>
                    </div>
                   
                    {/* <section id="pricing" class="section-bg">
                        <div class="container">

                        <div class="section-header">
                            <h3 class="section-title">Pricing</h3>
                            <span class="section-divider"></span>
                            <p class="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                        </div>

                        <div class="row">

                            <div class="col-lg-4 col-md-6">
                            <div class="box wow fadeInLeft">
                                <h3>Free</h3>
                                <h4><sup>$</sup>0<span> month</span></h4>
                                <ul>
                                <li><i class="ion-android-checkmark-circle"></i> Quam adipiscing vitae proin</li>
                                <li><i class="ion-android-checkmark-circle"></i> Nec feugiat nisl pretium</li>
                                <li><i class="ion-android-checkmark-circle"></i> Nulla at volutpat diam uteera</li>
                                <li><i class="ion-android-checkmark-circle"></i> Pharetra massa massa ultricies</li>
                                <li><i class="ion-android-checkmark-circle"></i> Massa ultricies mi quis hendrerit</li>
                                </ul>
                                <a href="#" class="get-started-btn">Get Started</a>
                            </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                            <div class="box featured wow fadeInUp">
                                <h3>Business</h3>
                                <h4><sup>$</sup>29<span> month</span></h4>
                                <ul>
                                <li><i class="ion-android-checkmark-circle"></i> Quam adipiscing vitae proin</li>
                                <li><i class="ion-android-checkmark-circle"></i> Nec feugiat nisl pretium</li>
                                <li><i class="ion-android-checkmark-circle"></i> Nulla at volutpat diam uteera</li>
                                <li><i class="ion-android-checkmark-circle"></i> Pharetra massa massa ultricies</li>
                                <li><i class="ion-android-checkmark-circle"></i> Massa ultricies mi quis hendrerit</li>
                                </ul>
                                <a href="#" class="get-started-btn">Get Started</a>
                            </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                            <div class="box wow fadeInRight">
                                <h3>Developer</h3>
                                <h4><sup>$</sup>49<span> month</span></h4>
                                <ul>
                                <li><i class="ion-android-checkmark-circle"></i> Quam adipiscing vitae proin</li>
                                <li><i class="ion-android-checkmark-circle"></i> Nec feugiat nisl pretium</li>
                                <li><i class="ion-android-checkmark-circle"></i> Nulla at volutpat diam uteera</li>
                                <li><i class="ion-android-checkmark-circle"></i> Pharetra massa massa ultricies</li>
                                <li><i class="ion-android-checkmark-circle"></i> Massa ultricies mi quis hendrerit</li>
                                </ul>
                                <a href="#" class="get-started-btn">Get Started</a>
                            </div>
                            </div>

                        </div>
                        </div>
                    </section> */}
                    <section id="faq">
                        <div class="container">

                        <div class="section-header">
                            <h3 class="section-title">Frequently Asked Questions</h3>
                            <span class="section-divider"></span>
                            <p class="section-description">Got some burning questions you want answered? We're listening</p>
                        </div>

                        <ul id="faq-list" class="wow fadeInUp">
                            <li>
                            <a data-toggle="collapse" class="collapsed" href="#faq1">I've got some project ideas I want to see built, can you help?</a>
                            <div id="faq1" class="collapse" data-parent="#faq-list">
                                <p>
                                    We listen to our readers. Any feedback you leave us will be incorperated into the next posts.
                                </p>
                            </div>
                            </li>

                            <li>
                            <a data-toggle="collapse" href="#faq2" class="collapsed">I love your content, is there anyway we can help you develop more content?</a>
                            <div id="faq2" class="collapse" data-parent="#faq-list">
                                <p>
                                    We are an entirely student initiative. Any donations provided are greatly appreciated and will help us to keep our content free.
                                </p>
                            </div>
                            </li>

                            <li>
                            <a data-toggle="collapse" href="#faq3" class="collapsed">What makes your team qualified to teach engineering concepts?</a>
                            <div id="faq3" class="collapse" data-parent="#faq-list">
                                <p>
                                    Our team consists of computer engineering students with real world experince from around the world. Our content comes straight from the classroom to you.
                                </p>
                            </div>
                            </li>

                        </ul>

                        </div>
                    </section>
                   
                    {/* <section id="gallery">
                        <div class="container-fluid">
                        <div class="section-header">
                            <h3 class="section-title">Gallery</h3>
                            <span class="section-divider"></span>
                            <p class="section-description">Results speak for themselves. Check out our sense of Elegance and Design</p>
                        </div>

                        <div class="row no-gutters">

                            <div class="col-lg-4 col-md-6">
                            <div class="gallery-item wow fadeInUp">
                                <a href={gallery1} class="gallery-popup">
                                <img src={gallery1} alt=""/>
                                </a>
                            </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                            <div class="gallery-item wow fadeInUp">
                                <a href={gallery2} class="gallery-popup">
                                <img src={gallery2} alt=""/>
                                </a>
                            </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                            <div class="gallery-item wow fadeInUp">
                                <a href={gallery3} class="gallery-popup">
                                <img src={gallery3} alt=""/>
                                </a>
                            </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                            <div class="gallery-item wow fadeInUp">
                                <a href={gallery4} class="gallery-popup">
                                <img src={gallery4} alt=""/>
                                </a>
                            </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                            <div class="gallery-item wow fadeInUp">
                                <a href={gallery5} class="gallery-popup">
                                <img src={gallery5} alt=""/>
                                </a>
                            </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                            <div class="gallery-item wow fadeInUp">
                                <a href={gallery6} class="gallery-popup">
                                <img src={gallery6} alt=""/>
                                </a>
                            </div>
                            </div>

                        </div>

                        </div>
                    </section> */}
              
                    </main>
                    <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
            </div>
        )
    }
}    

const mapStateToProps = state => (
    { 
        mobile: state.AppReducer.mobile
    }
)

export default connect(mapStateToProps, { })(LandingPage);