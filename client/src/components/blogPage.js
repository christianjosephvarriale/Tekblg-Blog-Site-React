/* eslint-disable no-unused-expressions */
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/blog.module.css';
import '../css/slick-slider.css';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/postActions';
import Snackbar from './snackbar';
import '../css/code.css'
import SideNav from './sideNav.js'
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';

const url = window.location.href;
const id = (url.lastIndexOf('#') == -1) ? url.slice(url.lastIndexOf('/')+1) : url.slice(url.lastIndexOf('/')+1, url.lastIndexOf('#'))

class BlogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionIds: {}, /* holds the IDs of the h tags */
            sectionsExist: false
        };
        // bindings
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({
            openSuccess: false,
            openError: false
        })
    }

    getSections = () => { /* sets the state for all title tags */
        const titles = document.getElementsByClassName('blog-heading');
        const sectionIds = {};
        for ( let i=0; i < titles.length; i++ ) { /* setState */ 
            sectionIds[`${titles[i].id}`] = titles[i].id;
        }
        const sectionsExist = true
        this.setState({ sectionIds, sectionsExist });
    }

    componentDidMount() {
        this.props.fetchPost(id);

        setTimeout(() => {
            
            var script = document.createElement("script");
            script.innerHTML = `var disqus_config = function () {
                this.page.url = "${window.location.href}";  // Replace PAGE_URL with your page's canonical URL variable
                this.page.identifier = "${unescape(this.props.title)}"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
                };
                
                (function() { // DON'T EDIT BELOW THIS LINE
                var d = document, s = d.createElement('script');
                s.src = 'https://tekblg.disqus.com/embed.js';
                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
                })();
            ` 
            const el = document.getElementById('disqus_thread')
            el.parentElement.appendChild(script);

        }, 1000)
    }

    handleChange = name => event => {

        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        const post = this.props.state.currPost;
        const { mobile } = this.props;
        let { title } = post;
        const { body } = post;

        if ( post.error ) { /* Not found */
            return <Redirect to="/404" />
        }

        if ( !title ) {
            return (
                null
            )
        } else {

        var tags = post.tags.map((tag) => {
            return <a>{tag}</a>
        });

        //add body and format code
        setTimeout(() => {
            window.PR.prettyPrint()
            if ( !this.state.sectionsExist) {
                this.getSections();
            }           
        }, 1000)

        let sideNav;
        if ( !mobile && Object.keys(this.state.sectionIds).length > 0 ) {
            sideNav = <SideNav sectionIds={this.state.sectionIds} />
        }

        if ( title.length > 80 ) { /* truncate the length for readability */
            title = title.slice(0, 80) + '...'
        } 

        let desBody = body;
        if ( body.length > 80 ) { /* truncate the length for readability */
            desBody = body.slice(0, 80) + '...'
        } 
    
        return (
                <section style={{backgroundColor: 'white'}} className={[styles.sContent,styles.sContentTopPadding,styles.sContentNarrow].join(" ")}>
                    {sideNav}
                    <Helmet>
                        <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></script>
                        <script type="application/ld+json">{`
                            {
                            "@type":"BlogPosting",
                            "headline": "${title}",
                            "datePublished": "${post.date}",
                            "articleBody": "${escape(desBody)}",
                            "image":"${post.headerImg}",
                            "wordcount": "${body.length}",
                            "url": "https://tekblg.com/blog/article/${post.catagory}/computerengineering/${id}",
                            "pageStart":"1",
                            "pageEnd":"1",
                            "keywords": "${post.tags.join(' ')}",
                            "genre":"${post.catagory}", 
                            "publisher": {
                                "@type": "Organization",
                                "name": "tekblg",
                                "url": "http://www.tekblg.com",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://tekblg.com/static/media/t.889a1a8a.png",
                                    "width":"40",
                                    "height":"40"
                                }
                            },
                            "author": {
                                "@type": "Person",
                                "name": "tekblg"
                            }
                        }
                        `}</script>
                        <title>{post.title}</title>
                        <meta name="description" content={post.meta} />
                    </Helmet>

                    <Snackbar handleClose={this.handleClose} open={this.state.openSuccess} variant={'success'} message={"Thanks for posting the comment"} />
                    <Snackbar handleClose={this.handleClose} open={this.state.openError} variant={'error'} message={"You've got some errors on the comment form"} />

                    <article className={[styles.row,styles.entry,styles.formatStandard].join(" ")}>
                        <div className={[styles.entryMedia,styles.colFull].join(" ")}>
                            <div className={styles.entryPostThumb}>
                                <img src={post.headerImg} alt="" />
                            </div>
                        </div>
    
                        <div className={[styles.entryHeader,styles.colFull].join(" ")}>
                            <h1 className={[styles.entryHeaderTitle,styles.display1].join(" ")}>
                                {post.title}
                            </h1>
                            <ul className={styles.entryHeaderMeta}>
                                <li className={styles.date}>{post.date}</li>
                                <li className={styles.byline}>
                                    By {post.author}
                                </li>
                            </ul>
                        </div>
    
                        <div id="body" className={[styles.colFull,styles.entryMain].join(" ")} >   
                            {body}
                        </div>
    
                        <div className={styles.entryTaxonomies}>
                                <div className={styles.entryCat}>
                                    <h5>Posted In: </h5>
                                    <span className={styles.entryTaxList}>
                                        <span>{post.catagory}</span>
                                    </span>
                                </div> 
    
                                <div className={styles.entryTags}>
                                    <h5>Tags: </h5>
                                    <span className={[styles.entryTaxList,styles.entryTaxListPill].join(" ")}>
                                        {tags}
                                    </span>
                                </div> 
                            </div> 
    
                            <div className={styles.entryAuthor}>


                                <div className={styles.entryAuthorAbout}>
                                    <h5 className={styles.entryAuthorName}>
                                        <span>Posted by</span>
                                        <h2 style={{marginTop:0}}>Tekblg</h2>
                                    </h5>
    
                                    <div className={styles.entryAuthorDesc}>
                                        <p>
                                        Tekblg's team of engineers and writers provide you with
                                        high quality content in many different catagories relating 
                                        to the tech space ranging from instructional to motivational.
                                        Tell us what you thought about this post. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>     
                    <div style={{padding:40}} id="disqus_thread"></div>
                </section> 
            )
        }
    }
}

const mapStateToProps = state => (
    { 
        state: state.BlogReducer,
        mobile: state.AppReducer.mobile
    }
)

export default connect(mapStateToProps, { fetchPost })(BlogPage);