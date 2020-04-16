import React, { Component } from 'react';
import jquery from 'jquery';
import '../lib/bootstrap/css/bootstrap.min.css';
import '../lib/animate/animate.min.css';
import '../lib/font-awesome/css/font-awesome.min.css';
import '../lib/ionicons/css/ionicons.min.css';
import '../lib/magnific-popup/magnific-popup.css';
import '../css/style.css';
import Button from './button';
import chip from '../img/chip.svg';
import mining from '../img/mining.svg';
import course from '../img/online-class.svg';
import led from '../img/led.svg';
import TypeIt from 'typeit';
import { connect } from 'react-redux';
import tekblg from '../img/tekblg.png'
import '../css/code.css'

// define jQuery as part of the window
window.jQuery = jquery;
const $ = jquery


require("../lib/jquery/jquery.min.js");
require("../lib/jquery/jquery-migrate.min.js");
require("../lib/bootstrap/js/bootstrap.bundle.min.js");
require("../lib/easing/easing.min.js");
require("../lib/wow/wow.min.js");
require("../lib/superfish/hoverIntent.js");
require("../lib/superfish/superfish.min.js");
require("../lib/magnific-popup/magnific-popup.min.js");
require("../js/main.js");



class LandingPage extends Component {
    constructor(props) {
      super(props);
      this.state = { };
    }

    componentDidMount() {

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
        console.log('rerendered')
        const { loading } = this.props.state;
        if (loading) {
            return ( null )
        } else {
            return (
                <div>
                    <section id="intro">
                        <div className={'banner'} style={{marginTop: 30}} />
                        <div class="intro-text">
                            <img style={{ width: '90%', maxWidth:500, zIndex: 1}} src={tekblg} />
                            <p style={{fontWeight: 600, color: '#f43044', width:'100%', marginBottom: 60}} id='text'></p>
                            <Button handleClick={(e) => this.props.toggleSubscriptionState()} label={'Subscribe'}/> 
                        </div>
                    </section>
                    <main id="main">
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
                                <div class="icon"><img src={chip} /></div>
                                <div>
                                    <h4 class="title">Buzz Topics & Applications</h4>
                                    <p class="description">Demystify Machine Learning and cloud computing applications for your next project</p>
                                </div>
                                </div>
                            </div>

                            <div style={{padding:'20px 20px 0 20px'}} class="col-lg-6">
                            <div class="box wow fadeInRight">
                                <div class="icon"><img src={mining} /></div>
                                <div>
                                    <h4 class="title">Ready to use tools and components</h4>
                                    <p class="description"> Don't re-invent the wheel. We've got everything from Data Pipelines and hardware schematics, to generic handy software</p>
                                </div>
                                </div>
                            </div>

                            <div style={{padding:'20px 20px 0 20px'}} class="col-lg-6">
                            <div class="box wow fadeInLeft">
                                <div class="icon"><img src={course} /></div>
                                <div>
                                    <h4 class="title">Learn Computer Engineering coursework</h4>
                                    <p class="description">Courses in engineering are seldom taught well. Learn about advanced concepts in programming and hardware design.</p>
                                </div>
                               </div>
                            </div>

                            <div style={{padding:'20px 20px 0 20px'}} class="col-lg-6">
                            <div class="box wow fadeInRight">
                                <div class="icon"><img src={led} /></div>
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
                    {/* <section id="features">
                        <div class="container">

                        <div class="row">

                            <div class="col-lg-8 offset-lg-4">
                            <div class="section-header wow fadeIn" data-wow-duration="1s">
                                <h3 class="section-title">Product Features</h3>
                                <span class="section-divider"></span>
                            </div>
                            </div>
                            

                            <div style={{display:'flex',alignItems:'center'}} class="col-lg-4 col-md-5 features-img">
                            <img src={computer} alt="" class="wow fadeInLeft"/>
                            </div>

                            <div class="col-lg-8 col-md-7 ">

                            <div class="row">

                                <div class="col-lg-6 col-md-6 box wow fadeInRight">
                                <div class="icon"><i class="ion-ios-speedometer-outline"></i></div>
                                <h4 class="title"><a href="">Business Intelligence</a></h4>
                                <p class="description">Gather any data about your business, competition, industry, products, people or location</p>
                                </div>
                                <div class="col-lg-6 col-md-6 box wow fadeInRight" data-wow-delay="0.1s">
                                <div class="icon"><i class="ion-ios-flask-outline"></i></div>
                                <h4 class="title"><a href="">Alternative Data</a></h4>
                                <p class="description">We collect and build custom alternative data models for Investors, Hedge Funds and Market Analysts</p>
                                </div>
                                <div class="col-lg-6 col-md-6 box wow fadeInRight" data-wow-delay="0.2s">
                                <div class="icon"><i class="ion-social-buffer-outline"></i></div>
                                <h4 class="title"><a href="">Robotic Process Automation</a></h4>
                                <p class="description">Automate and build complex workflows to integrate data from websites that don’t have an interface, combine the data</p>
                                </div>
                                <div class="col-lg-6 col-md-6 box wow fadeInRight" data-wow-delay="0.3s">
                                <div class="icon"><i class="ion-ios-analytics-outline"></i></div>
                                <h4 class="title"><a href="">Export data in CSV</a></h4>
                                <p class="description">Build scrapers, scrape sites and export data in CSV format directly from your browser. Use Cloud Web Scraper to access scraped data via API, webhooks or get it exported via Dropbox</p>
                                </div>
                            </div>

                            </div>

                        </div>

                        </div>

                    </section> */}
                    <section id="advanced-features">

                        {/* <div class="features-row section-bg">
                        <div class="container">
                            <div class="row">
                            <div class="col-12">
                                <img class="advanced-feature-img-right wow fadeInRight" src={advancedFeature1} alt=""/>
                                <div class="wow fadeInLeft">
                                <h2>Duis aute irure dolor in reprehenderit in voluptate velit esse</h2>
                                <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div> */}

                        {/* <div class="features-row">
                        <div class="container">
                            <div class="row">
                            <div class="col-12">
                                <img style={{maxHeight:401}} class="advanced-feature-img-left" src={team} alt=""/>
                                <div class="wow fadeInRight">
                                <h2>Fully managed enterprise-grade web scraping service</h2>
                                <i class="ion-ios-paper-outline" class="wow fadeInRight" data-wow-duration="0.5s"></i>
                                <p class="wow fadeInRight" data-wow-duration="0.5s">The Data Extraction Engine is designed for the high performance of mass data extraction. Parallelized algorithms allows to run multiple simulations through a proxy-rotating platform.</p>
                                <i class="ion-ios-color-filter-outline wow fadeInRight" data-wow-delay="0.2s" data-wow-duration="0.5s"></i>
                                <p class="wow fadeInRight" data-wow-delay="0.2s" data-wow-duration="0.5s">Each package is tailored to your needs.
The advanced dataflow contains a set of opportunities for status tracking, importing, cleaning and preparing data for analysis so it can be easily and properly queried and analyzed in the analytics tools.</p>
                                <i class="ion-ios-barcode-outline wow fadeInRight" data-wow-delay="0.4" data-wow-duration="0.5s"></i>
                                <p class="wow fadeInRight" data-wow-delay="0.4s" data-wow-duration="0.5s">Our platform deploys quickly and scales easily. Integrate Data Extraction platform with your enterprise systems, while satisfying stringent data security and privacy. We offer flexible Private Deployments that can run in private cloud or on-premise. We can give your developers the utmost flexibility in automating sophisticated data flows end-to-end via API plus rich XML configuration.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div> */}

                        {/* <div class="features-row section-bg">
                        <div class="container">
                            <div class="row">
                            <div class="col-12">
                                <img class="advanced-feature-img-right wow fadeInRight" src={advancedFeature3}  alt=""/>
                                <div class="wow fadeInLeft">
                                <h2>Duis aute irure dolor in reprehenderit in voluptate velit esse</h2>
                                <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                <i class="ion-ios-albums-outline"></i>
                                <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div> */}

                    </section>
                    {/* <section id="call-to-action">
                        <div class="container">
                        <div class="row">
                            <div class="col-lg-9 text-center text-lg-left">
                            <h3 class="cta-title">Call To Action</h3>
                            <p class="cta-text"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div class="col-lg-3 cta-btn-container text-center">
                            <a class="cta-btn align-middle" href="#">Call To Action</a>
                            </div>
                        </div>

                        </div>
                    </section> */}
                    
                    {/* <section id="clients">
                        <div class="container">

                        <div class="section-header">
                            <h3 style={{textAlign:'center',fontWeight: 400,marginBottom: 15,fontSize: 28}}>Here are some of our happy customers</h3>
                            <span class="section-divider"></span>
                        </div>
                        
                        <div class="row wow fadeInUp">

                            <div class="col-md-2">
                            <img src={client1} alt=""/>
                            </div>

                            <div class="col-md-2">
                            <img src={client2} alt=""/>
                            </div>

                            <div class="col-md-2">
                            <img src={client3} alt=""/>
                            </div>

                            <div class="col-md-2">
                            <img src={client4} alt=""/>
                            </div>

                            <div class="col-md-2">
                            <img src={client5} alt=""/>
                            </div>

                            <div class="col-md-2">
                            <img src={client6} alt=""/>
                            </div>

                        </div>
                        </div>
                    </section> */}
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
                            <a data-toggle="collapse" class="collapsed" href="#faq1">I've got some project ideas I want to see built, can you help? <i class="ion-android-remove"></i></a>
                            <div id="faq1" class="collapse" data-parent="#faq-list">
                                <p>
                                    We listen to our readers. Any feedback you leave us will be incorperated into the next posts.
                                </p>
                            </div>
                            </li>

                            <li>
                            <a data-toggle="collapse" href="#faq2" class="collapsed">I love your content, is there anyway we can help you develop more content? <i class="ion-android-remove"></i></a>
                            <div id="faq2" class="collapse" data-parent="#faq-list">
                                <p>
                                    We are an entirely student initiative. Any donations provided are greatly appreciated and will help us to keep our content free.
                                </p>
                            </div>
                            </li>

                            <li>
                            <a data-toggle="collapse" href="#faq3" class="collapsed">What makes your team qualified to teach engineering concepts? <i class="ion-android-remove"></i></a>
                            <div id="faq3" class="collapse" data-parent="#faq-list">
                                <p>
                                    Our team consists of computer engineering students with real world experince from around the world. Our content comes straight from the classroom to you.
                                </p>
                            </div>
                            </li>

                        </ul>

                        </div>
                    </section>
                    {/* <section id="team" class="section-bg">
                        <div class="container">
                        <div class="section-header">
                            <h3 class="section-title">Our Team</h3>
                            <span class="section-divider"></span>
                            <p class="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                        </div>
                        <div style={{display:'flex',justifyContent:'center'}} class="row wow fadeInUp">
                            <div  class="col-lg-3 col-md-6">
                            <div class="member">
                                <div class="pic"><div style={{backgroundPositionX: 'center', height:'100%', backgroundImage: 'url('+photo+')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} alt=""/></div>
                                <h4>Christian J. Varriale</h4>
                                <span>Chief Executive Officer</span>
                                <div class="social">
                                <a href=""><i class="fa fa-twitter"></i></a>
                                <a href=""><i class="fa fa-facebook"></i></a>
                                <a href=""><i class="fa fa-google-plus"></i></a>
                                <a href=""><i class="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                            </div>
                        </div>

                        </div>
                    </section> */}
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
}    

const mapStateToProps = state => (
    { state: state.AppReducer }
)

export default connect(mapStateToProps, { })(LandingPage);