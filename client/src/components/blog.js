import React, { Component } from 'react';
import styles from '../css/blog.module.css';
import '../css/slick-slider.css';
import BlogPost from './blogPost';
import { connect } from 'react-redux';
import { fetchAllPosts } from '../actions/postActions';
import Pagniation from './pagination';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';

class Blog extends Component {

    componentDidMount() {
        this.props.fetchAllPosts() 
    }

    render(){
        const props = this.props;
        let { posts } = props;
        let schemaData;
        const length = posts.length;

        if (posts && posts.length > 0) { /* data has arrived */

            // sort the posts by datetime
            posts.sort(function(a, b) {
                return (a.date < b.date) ? -1 : ((a.date > b.date) ? 1 : 0);
            });

            posts = posts.reverse()

            const url = props.location.pathname;
            const page = url.slice(url.lastIndexOf('/')+1);

            if (page > (Math.floor(length / 12) + 1)) { /* throw 404 */ 
                return ( <Redirect to="/404" /> )
            }

            // load only up to 12 posts
            const slcdPostLst = posts.slice( (page-1) * 12, page * 12 );

            posts = slcdPostLst.map((post) =>  
                { 
                    return (
                        <BlogPost 
                            title={post.title} 
                            headerImg={post.headerImg} 
                            id={post.id} 
                            catagory={post.catagory} 
                            date={post.date} 
                        />
                    )
                } 
            );

            schemaData = slcdPostLst.map((post) =>  
            { 
                let title = post.title;
                if ( post.title.length > 80 ) { /* truncate the length for readability */
                    title = title.slice(0, 80) + '...'
                } 
                return (
                    `{
                        "@type":"BlogPosting",
                        "headline": "${post.title}",
                        "datePublished": "${post.date}",
                        "image":"${post.headerImg}",
                        "url": "https://tekblg.com/blog/article/${post.catagory}/computerengineering/${post.id}",
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
                    }`
                )
            }) 
        }

        return (
                <div id="top">
                        <Helmet>
                        <script type="application/ld+json">{`
                            {
                                "@context":"http://schema.org",
                                "@type":"Blog",
                                "@id":"${window.location.href}",
                                "headline":"Computer Engineering technical posts",
                                "description":"Here are some blog posts relating to NodeJS, SEO, and technology in general",
                                "blogPost": [${schemaData}]
                            }  
                        `}</script>
                        </Helmet>
                        <section style={{paddingTop: 200}} className={styles.sContent}>
                            <div className={[styles.row,styles.entriesWrap,styles.wide].join(" ")}>
                                <div className={styles.entries}>
                                    {posts}
                                </div> 
                            </div>
                            <Pagniation total={length}/>
                        </section> 
                </div>
            )
    }
}

const mapStateToProps = state => ({
    posts: state.BlogReducer.posts,
    featPosts: state.BlogReducer.featPosts
})

export default connect(mapStateToProps, { fetchAllPosts })(Blog);